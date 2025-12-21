import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "AI Image Detection with Grad-CAM | Roshan Siddartha Sivakumar",
    description:
        "Deep learning project comparing ResNet18, EfficientNet-B0, and VGG16 for AI-generated image detection, achieving 98% accuracy with Grad-CAM interpretability.",
};

export default function AIDetectionPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    AI Image Detection with Grad-CAM
                </h1>
                <p className="text-xl text-[var(--foreground)]/80 font-medium mb-2">
                    Detecting AI-Generated Images Using Deep Learning & Interpretability
                </p>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    VGG16 · EfficientNet-B0 · ResNet18 · Grad-CAM · Transfer Learning
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    DS-5220 Deep Learning | Vanderbilt University | Fall 2024
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Developed and evaluated deep learning models for automatic detection
                        of AI-generated images. Compared three CNN architectures on the
                        CIFAKE dataset (120K images) and used <strong className="text-[var(--foreground)]">Gradient-weighted Class Activation
                            Mapping (Grad-CAM)</strong> to provide interpretability, revealing how
                        models distinguish real photographs from synthetic images.
                    </p>
                </div>

                {/* Key Achievement Banner */}
                <div className="border-2 border-[var(--accent)] p-6 mb-12">
                    <p className="text-sm text-[var(--accent)] uppercase tracking-wide font-medium mb-4">
                        Key Achievement
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">98.42%</p>
                            <p className="text-sm text-[var(--foreground)]/70">Best accuracy (EfficientNet-B0)</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">0.9987</p>
                            <p className="text-sm text-[var(--foreground)]/70">ROC-AUC score</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">26x</p>
                            <p className="text-sm text-[var(--foreground)]/70">More efficient than VGG16</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* The Problem */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            The Problem
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            With the rise of generative AI models like Stable Diffusion and
                            DALL-E, distinguishing between real photographs and AI-generated
                            images has become increasingly important for combating
                            misinformation. This project explores whether deep learning can
                            reliably detect synthetic images and, crucially, understand
                            <em> why</em> certain images are classified as fake.
                        </p>
                    </div>

                    {/* My Contribution */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            My Contribution: VGG16 Model
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            I was responsible for implementing and evaluating the VGG16
                            architecture, a classic deep CNN with 138M parameters.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-xl font-bold text-[var(--foreground)]">97.94%</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Accuracy</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-xl font-bold text-[var(--foreground)]">0.9794</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">F1-Score</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-xl font-bold text-[var(--foreground)]">0.9981</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">ROC-AUC</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-xl font-bold text-[var(--foreground)]">138M</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Parameters</p>
                            </div>
                        </div>
                        <div className="mt-4 text-[var(--foreground)]/70">
                            <p className="font-semibold text-[var(--foreground)]/90 mb-2">
                                Grad-CAM Insights from VGG16:
                            </p>
                            <ul className="space-y-1 ml-4">
                                <li><strong>Fake images:</strong> Model focuses on diffuse background textures and unnatural artifacts</li>
                                <li><strong>Real images:</strong> Attention concentrated on object outlines and natural details</li>
                            </ul>
                        </div>
                    </div>

                    {/* Comparative Analysis */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Comparative Analysis: 3 Architectures
                        </h3>
                        <div className="space-y-4">
                            <div className="border border-[var(--accent)] p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="font-semibold text-[var(--foreground)]">EfficientNet-B0</p>
                                        <p className="text-xs text-[var(--foreground)]/50">Kanu Shetkar</p>
                                    </div>
                                    <span className="text-[var(--accent)] font-bold">98.42%</span>
                                </div>
                                <p className="text-sm text-[var(--foreground)]/70">5.3M parameters | Winner: Best accuracy with fewest params</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="font-semibold text-[var(--foreground)]">VGG16 (My Model)</p>
                                        <p className="text-xs text-[var(--foreground)]/50">Roshan Sivakumar</p>
                                    </div>
                                    <span className="text-[var(--foreground)]/80 font-bold">97.94%</span>
                                </div>
                                <p className="text-sm text-[var(--foreground)]/70">138M parameters | Classic architecture, strong performance</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="font-semibold text-[var(--foreground)]">ResNet18</p>
                                        <p className="text-xs text-[var(--foreground)]/50">Beema Rajan</p>
                                    </div>
                                    <span className="text-[var(--foreground)]/80 font-bold">96.66%</span>
                                </div>
                                <p className="text-sm text-[var(--foreground)]/70">11M parameters | Modern baseline with skip connections</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Insights */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Key Insights
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">Bigger is not always better:</strong> VGG16 (138M params) did not outperform EfficientNet-B0 (5.3M params)
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Efficiency matters:</strong> Compound scaling in modern architectures provides significant advantages
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Interpretability is crucial:</strong> Grad-CAM revealed all models learned meaningful, distinguishable features
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">All models highly effective:</strong> Every architecture achieved &gt;96% accuracy on AI detection
                            </li>
                        </ul>
                    </div>

                    {/* Dataset */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Dataset: CIFAKE
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">120K</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Images</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">32×32</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Resolution</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">50/50</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Real/Fake Split</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">SD</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Stable Diffusion</p>
                            </div>
                        </div>
                        <p className="text-sm text-[var(--foreground)]/50 mt-4">
                            Real images from CIFAR-10, synthetic images generated with Stable Diffusion
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "PyTorch",
                                "VGG16",
                                "EfficientNet",
                                "ResNet",
                                "Grad-CAM",
                                "Transfer Learning",
                                "Python",
                                "Matplotlib",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm font-medium uppercase tracking-wide border border-[var(--border)] text-[var(--foreground)]/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Team */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Team
                        </h3>
                        <ul className="text-[var(--foreground)]/70 space-y-1">
                            <li><strong className="text-[var(--foreground)]">Roshan Sivakumar</strong> - VGG16</li>
                            <li><strong className="text-[var(--foreground)]">Kanu Shetkar</strong> - EfficientNet-B0</li>
                            <li><strong className="text-[var(--foreground)]">Beema Rajan</strong> - ResNet18</li>
                        </ul>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <BackButton />
                </div>
            </div>
        </section>
    );
}
