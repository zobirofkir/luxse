import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Quels types de diamants proposez-vous ?',
    answer:
      'Nous proposons une large gamme de diamants naturels certifiés, allant des pierres classiques aux pièces rares et uniques.',
  },
  {
    question: 'Vos bijoux sont-ils personnalisables ?',
    answer:
      'Oui, chaque création peut être adaptée selon vos préférences : taille, métal, pierre, gravure et plus encore.',
  },
  {
    question: 'Comment entretenir mon bijou en diamant ?',
    answer:
      'Nous vous recommandons de nettoyer délicatement votre bijou avec un chiffon doux et d’éviter tout produit chimique agressif.',
  },
  {
    question: 'Offrez-vous des certificats d’authenticité ?',
    answer:
      'Oui, chaque diamant est accompagné d’un certificat d’authenticité délivré par un laboratoire reconnu.',
  },
  {
    question: 'Quels types de diamants proposez-vous ?',
    answer:
      'Nous proposons une large gamme de diamants naturels certifiés, allant des pierres classiques aux pièces rares et uniques.',
  },
  {
    question: 'Vos bijoux sont-ils personnalisables ?',
    answer:
      'Oui, chaque création peut être adaptée selon vos préférences : taille, métal, pierre, gravure et plus encore.',
  },
  {
    question: 'Comment entretenir mon bijou en diamant ?',
    answer:
      'Nous vous recommandons de nettoyer délicatement votre bijou avec un chiffon doux et d’éviter tout produit chimique agressif.',
  },
  {
    question: 'Offrez-vous des certificats d’authenticité ?',
    answer:
      'Oui, chaque diamant est accompagné d’un certificat d’authenticité délivré par un laboratoire reconnu.',
  },
  {
    question: 'Quels types de diamants proposez-vous ?',
    answer:
      'Nous proposons une large gamme de diamants naturels certifiés, allant des pierres classiques aux pièces rares et uniques.',
  },
  {
    question: 'Vos bijoux sont-ils personnalisables ?',
    answer:
      'Oui, chaque création peut être adaptée selon vos préférences : taille, métal, pierre, gravure et plus encore.',
  },
  {
    question: 'Comment entretenir mon bijou en diamant ?',
    answer:
      'Nous vous recommandons de nettoyer délicatement votre bijou avec un chiffon doux et d’éviter tout produit chimique agressif.',
  },
  {
    question: 'Offrez-vous des certificats d’authenticité ?',
    answer:
      'Oui, chaque diamant est accompagné d’un certificat d’authenticité délivré par un laboratoire reconnu.',
  },
]

const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-300 py-4">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left text-lg sm:text-xl font-semibold text-gray-800 hover:text-black transition-colors"
    >
      {faq.question}
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 text-base sm:text-lg mt-3 pr-4"
        >
          {faq.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wide"
      >
        Questions Fréquemment Posées
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default FaqComponent
