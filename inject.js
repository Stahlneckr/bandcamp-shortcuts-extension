chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			document.onkeypress = keyboardAction;
			function keyboardAction(e) {
				e = e || event;
				if(e.keyCode == 8226) {
					$('.playbutton')[0].click();
				} else if(e.keyCode == 170) {
					var currentTrackRel = $('.current_track').attr('rel');
					var currentTrackNum = parseInt(currentTrackRel.substr(currentTrackRel.indexOf("=") + 1));
					var findString = '[rel="tracknum='+(currentTrackNum+1)+'"]';
					var nextTrack = $('.track_list.track_table').find(findString);
					if(nextTrack.length) {
						$(nextTrack).find('.play_status').click();
					} else {
						$('.track_list.track_table').find('[rel="tracknum=1"]').find('.play_status').click();
					}
				} else if(e.keyCode == 182) {
					var currentTrackRel = $('.current_track').attr('rel');
					var currentTrackNum = parseInt(currentTrackRel.substr(currentTrackRel.indexOf("=") + 1));
					var findString = '[rel="tracknum='+(currentTrackNum-1)+'"]';
					var nextTrack = $('.track_list.track_table').find(findString);
					if(nextTrack.length) {
						$(nextTrack).find('.play_status').click();
					} else {
						$('.play_status').last().click();
					}
				}
			}
			
		}
	}, 100);
});