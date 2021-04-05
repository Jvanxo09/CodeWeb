$('.wv-tabs-header__tab').on 'click', (e) ->
  e.preventDefault()
  
  $('.wv-tabs-header__tab').removeClass 'wv-tabs-header__tab--active'
  
  $(this).addClass 'wv-tabs-header__tab--active'
  
  tabId = $(this).attr 'data-tab'
  
  $('.wv-tabs-content__panel').removeClass 'wv-tabs-content__panel--active'
  
  $('.wv-tabs-content__panel[data-tab="' + tabId + '"]').addClass 'wv-tabs-content__panel--active'