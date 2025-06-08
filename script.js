document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.sidebar a[data-view]');
  const views = document.querySelectorAll('.view');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const view = link.dataset.view;
      views.forEach(v => v.classList.add('hidden'));
      const target = document.getElementById(view);
      if (target) target.classList.remove('hidden');
    });
  });

  const form = document.getElementById('broilingForm');
  const output = document.getElementById('broilingOutput');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = {
        vision: document.getElementById('vision').value,
        projects: document.getElementById('projectsInput').value,
        tasks: document.getElementById('tasksInput').value,
        meetings: document.getElementById('meetingsInput').value,
        events: document.getElementById('eventsInput').value,
        weekly: document.getElementById('weeklyInput').value,
        monthly: document.getElementById('monthlyInput').value,
        yearly: document.getElementById('yearlyInput').value,
        chores: document.getElementById('choresInput').value,
        errands: document.getElementById('errandsInput').value,
        encouragement: document.getElementById('encouragement').value,
        weeklyVibe: document.getElementById('weeklyVibe').value,
        dailyVibe: document.getElementById('dailyVibe').value,
        overrides: document.getElementById('overrides').value,
        spotify: document.getElementById('spotifyProfile').value
      };

      output.textContent = JSON.stringify(data, null, 2);
      form.reset();
    });
  }
});
