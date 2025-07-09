const webhookURL = 'https://discord.com/api/webhooks/1392255826290413659/6N468WLLGHpVngJNrPa6e_9ye5-Ml1CaDcP39YACOjZupBuYoV3na4PWEsyg_cGhOZtp';

document.getElementById('submissionForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const player = document.getElementById('player').value.trim();
    const track = document.getElementById('track').value;
    const time = document.getElementById('time').value.trim();
    const youtube = document.getElementById('youtube').value.trim();
    const formDiv = document.getElementById('form');
    const resultDiv = document.getElementById('result');

    if (!player || !track || !time || !youtube) {
        alert('Please fill in all fields.');
        return;
    }

    const content = `**New Time Trial Submission**\n\n🏁 **Player:** ${player}\n🗺️ **Track:** ${track}\n⏱️ **Time:** ${time}\n🎥 **Footage:** ${youtube}`;

    try {
    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    });
        formDiv.style.display = 'none';
        resultDiv.style.display = 'block';
        document.getElementById('submissionForm').reset();
    } catch (err) {
        alert('Error sending submission.');
        console.error(err);
    }
});

function goBack() {
    document.getElementById('form').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}