//
// const portfolio = collection(db, 'portfolio');
const docRef = doc(db, 'portfolio', 'hero');
// console.log('docRef : ', docRef);
getDoc(docRef)
  .then((docSnap) => {
    console.log('doc data : ', docSnap.data());
    setData(docSnap.data());
  })
  .catch((err) => console.log(err));
// -------------------------
getDocs(collection(db, 'portfolio')).then((querySnapshot) => {
  const documents = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    documents.push(doc.data());
  });
  // setPersonalInfo(...personalInfo, documents);
  console.log('docs : ', documents);
});

console.log('state data : ', data);

(async () => {
  const portfolio = collection(db, 'portfolio');

  // await setDoc(doc(citiesRef, 'prova'), {});
  addDoc(collection(portfolio, 'social', 'facebook'), {
    link: 'https://www.linkedin.com/in/akladyous',
    platform: 'linkedin',
  });
})();
