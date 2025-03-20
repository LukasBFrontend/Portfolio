export async function getWelcome() {
  {
    const configID = 'ecfg_x2douw92m6re8xqks17hpntj2iwj';
    const configToken = '7ded99ca-db7e-4f62-97ee-75de9b6b74c8'

    try {
      // Fetch directly from Vercel Edge Config
      const res = await fetch(`https://edge-config.vercel.com/${configID}?token=${configToken}`);

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json(); // Convert response to JSON
      return data.items.greeting || 'No greeting found'; // Access the 'greeting' key
    } catch (error) {
      console.error('Fetch error:', error);
      return 'Error fetching greeting';
    }
  }
}

export async function createEdgeItems(objects) {
  let edgeItems = [];

  for (let i = 0; i < objects.length; i++) {
    edgeItems.push({
      operation: 'create',
      key: Object.keys(objects[i])[0],
      value: Object.values(objects[i])[0]
    });
  };

  console.log(edgeItems)
  patchEdgeConfig(edgeItems);
}

export async function patchEdgeConfig(items) {
  const configID = 'ecfg_x2douw92m6re8xqks17hpntj2iwj';
  const apiToken = 'KhjjYy9DS4qMqyYIRHc1gLAZ'

  try {
    const updateEdgeConfig = await fetch(
      `https://api.vercel.com/v1/edge-config/${configID}/items`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items
        }),
      },
    );
    const result = await updateEdgeConfig.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
