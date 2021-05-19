import './vendor';
import './helpers';

$(function() {
	let totalCandidateLevelResult = $('#candidate-level-result');
	let candidateLevels = $('.candidate-skills__item-checkbox');
	let checkedCandidateLevels = $('.candidate-skills__item-checkbox:checked');
	let candidateScale = $('.candidate-level__arrow-box');
	let signOfAcceptance = $('.candidate-info__icon-app');
	let initialRotationScaleCandidate = 195 / $(candidateLevels).length;

	$('.candidate-skills__item-label').on('click', () => {
		let currentCandidateLevelResult = 0;
		let rotationScale = 0;

		$(candidateLevels).each((index, chexbox) => {
			if($(chexbox).is(':checked')) {
				let checkedCandidateLevels = $('.candidate-skills__item-checkbox:checked');

				currentCandidateLevelResult += parseInt($(chexbox).data('level'));
				rotationScale += initialRotationScaleCandidate;

				if($(checkedCandidateLevels).length === 12) {
					signOfAcceptance.addClass('active-animated');
				}else {
					signOfAcceptance.removeClass('active-animated');
				}
			}

			$({countNum: totalCandidateLevelResult.text()}).animate(
				{
					countNum: currentCandidateLevelResult
				},
				{
					duration: 1000,
					easing: 'swing',
					step() {
						totalCandidateLevelResult.text(Math.floor(this.countNum));
					},

					complete() {
						totalCandidateLevelResult.text(this.countNum);
					}
				}
			);

			candidateScale.css({transform: `translateX(-50%) rotate(${rotationScale}deg)`});
		});
  	});
});