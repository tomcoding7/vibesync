import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

// Mock challenges data
const mockChallenges = [
  {
    id: '1',
    title: 'Profile Completion',
    description: 'Complete your profile to increase your match rate',
    reward: '2x Match Boost',
    progress: 75,
    completed: false,
  },
  {
    id: '2',
    title: 'Daily Check-in',
    description: 'Check in daily to earn rewards',
    reward: '50 Coins',
    progress: 100,
    completed: true,
  },
  {
    id: '3',
    title: 'Upload Video',
    description: 'Share a video to showcase your personality',
    reward: '3x View Boost',
    progress: 0,
    completed: false,
  },
];

const ChallengesScreen = () => {
  const [challenges, setChallenges] = useState(mockChallenges);

  const handleChallengePress = (challengeId: string) => {
    setChallenges(challenges.map(challenge =>
      challenge.id === challengeId
        ? { ...challenge, completed: !challenge.completed }
        : challenge
    ));
  };

  const renderChallenge = (challenge: typeof mockChallenges[0]) => (
    <TouchableOpacity
      key={challenge.id}
      style={[
        styles.challengeCard,
        challenge.completed && styles.completedChallenge,
      ]}
      onPress={() => handleChallengePress(challenge.id)}
    >
      <View style={styles.challengeHeader}>
        <Text style={styles.challengeTitle}>{challenge.title}</Text>
        <View style={styles.rewardBadge}>
          <Text style={styles.rewardText}>{challenge.reward}</Text>
        </View>
      </View>
      <Text style={styles.challengeDescription}>{challenge.description}</Text>
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${challenge.progress}%` },
          ]}
        />
        <Text style={styles.progressText}>{challenge.progress}%</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Challenges</Text>
        <Text style={styles.subtitle}>Complete challenges to earn rewards</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1</Text>
          <Text style={styles.statLabel}>In Progress</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>150</Text>
          <Text style={styles.statLabel}>Coins Earned</Text>
        </View>
      </View>

      <View style={styles.challengesContainer}>
        {challenges.map(renderChallenge)}
      </View>

      <TouchableOpacity style={styles.refreshButton}>
        <Text style={styles.refreshButtonText}>Refresh Challenges</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#5D3FD3',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5D3FD3',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  challengesContainer: {
    padding: 20,
  },
  challengeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedChallenge: {
    backgroundColor: '#f0f0f0',
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  rewardBadge: {
    backgroundColor: '#5D3FD3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  rewardText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#5D3FD3',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'right',
  },
  refreshButton: {
    backgroundColor: '#5D3FD3',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  refreshButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChallengesScreen; 