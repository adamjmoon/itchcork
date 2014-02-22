define ->
  customBindings = ->
    ko.bindingHandlers.sideMenuOpen =
      init: (element, valueAccessor) ->
        el = $(element)
        return unless el.hammer?
        el.hammer().on "swiperight dragright", (event) ->
          event.gesture.preventDefault()
          event.gesture.stopPropagation()
          event.gesture.stopDetect()
          options = valueAccessor()
          $('a.open-menu').click();
          return
        return

    ko.bindingHandlers.sideMenuClose =
      init: (element, valueAccessor) ->
        el = $(element)
        return unless el.hammer?
        el.hammer().on "swipeleft dragleft", (event) ->
          event.gesture.preventDefault()
          event.gesture.stopPropagation()
          event.gesture.stopDetect()
          options = valueAccessor()
          $('a.open-close').click();
          return
        return

    ko.bindingHandlers.tap =
      init: (element, valueAccessor) ->
        # Setup phantom click collector
        tapHelper = $("#tapHelper")
        unless $("#tapHelper").length > 0
          $("body").append("<div id='tapHelper' style='display: none; position: absolute; width: 3px; height: 3px; z-index: 5000;'></div>")
          tapHelper = $("#tapHelper")
          tapHelper.on "click", (event) ->
            # Caught the phantom click, prevent default
            event.preventDefault()
            tapHelper.hide()
            return

        tapBinding = new TapBinding(element, valueAccessor, tapHelper)

  return customBindings