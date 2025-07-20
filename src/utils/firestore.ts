// src/utils/firestore.ts
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Visitor Tracking
export const trackVisitor = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, 'visitors'), {
      ...data,
      timestamp: new Date(),
    });
    console.log('Visitor tracked with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error tracking visitor: ', error);
  }
};

// Contact Form Submissions
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: new Date(),
      status: 'new'
    });
    console.log('Contact form submitted with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    throw error;
  }
};

// Get all contacts (for admin)
export const getContacts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'contacts'));
    const contacts: any[] = [];
    querySnapshot.forEach((doc) => {
      contacts.push({ id: doc.id, ...doc.data() });
    });
    return contacts;
  } catch (error) {
    console.error('Error getting contacts: ', error);
    return [];
  }
};

// Analytics tracking
export const trackPageView = async (page: string) => {
  try {
    await addDoc(collection(db, 'analytics'), {
      page,
      timestamp: new Date(),
      userAgent: navigator.userAgent,
    });
  } catch (error) {
    console.error('Error tracking page view: ', error);
  }
};
