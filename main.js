function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];
  
// Initialiser les distances à l'infini et marquer tous les sommets comme non visités
    for (let vertex in graph) {
      distances[vertex] = Infinity;
      visited[vertex] = false;
    }
  
// La distance de départ à elle-même est toujours de 0
    distances[start] = 0;
  
// Ajouter le sommet de départ à la file d'attente
    queue.push(start);
  
    while (queue.length) {
// Extraire le sommet avec la plus petite distance de la file d'attente
      const currentVertex = queue.shift();
  
// Marquer le sommet actuel comme visité
      visited[currentVertex] = true;
  
// Parcourir tous les sommets adjacents du sommet actuel
      for (let neighbor in graph[currentVertex]) {
// Calculer la nouvelle distance
        const distance = distances[currentVertex] + graph[currentVertex][neighbor];
        
// Mettre à jour la distance si elle est plus petite que la distance actuellement enregistrée
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
        }
        
// Ajouter le voisin à la file d'attente s'il n'a pas été visité
    if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  
    return distances;
  }
  
// Exemple d'utilisation
  const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };