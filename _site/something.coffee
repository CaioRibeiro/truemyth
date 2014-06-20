#tabbar
  $tabbar = $('#what-nav');

  if( $tabbar.length )
    $tabbar.on 'click', 'a', (e) ->
      e.preventDefault()
      offset = $( $(this).attr('href') ).offset().top + 45
      $('html, body').animate
        scrollTop: offset

    tabbar_offset = $tabbar.offset().top
    # 140 comes from padding of container
    $('.tabbar-container').affix({
      offset: {
        top: tabbar_offset + 140 
      }
    })

    $('body').scrollspy({ target: '#what-nav' })