"use client";

import { createQuiz } from "@/lib/actions/quiz.action";

import React from "react";

const AdminQuiz = () => {
  const createeQuiz = async () => {
    try {
      const quiz = {
        question: "Question",
        ans: "ans",
        options: ["question1", "question2", "question3", "question4"],
        category: "Category",
      };
      const quizeee = await createQuiz(quiz);
    } catch (error) {
      console.log(error);
    }
  };

  // const category = await;

  return (
    <div>
      <button onClick={createeQuiz}>Create</button>
    </div>
  );
};

export default AdminQuiz;
