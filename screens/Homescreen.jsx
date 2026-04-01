import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

// ── Inline SVG-style icon components (no extra deps) ──────────────────────────

const PayBillIcon = () => (
  <View style={styles.iconWrapper}>
    <View style={[styles.iconCard, { backgroundColor: '#E8F0FE' }]}>
      {/* card body */}
      <View
        style={{
          width: 30,
          height: 20,
          borderRadius: 4,
          backgroundColor: '#4A6CF7',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 20,
            height: 3,
            backgroundColor: '#FFD700',
            borderRadius: 2,
          }}
        />
        <View
          style={{
            width: 20,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: 1,
            marginTop: 3,
          }}
        />
      </View>
    </View>
  </View>
);

const UploadProofIcon = () => (
  <View style={styles.iconWrapper}>
    <View style={[styles.iconCard, { backgroundColor: '#FFF3E0' }]}>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: '#FF6D00',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 10, fontWeight: '700' }}>
            ↑
          </Text>
        </View>
        <View
          style={{
            width: 22,
            height: 12,
            borderRadius: 3,
            borderWidth: 2,
            borderColor: '#FF6D00',
          }}
        />
      </View>
    </View>
  </View>
);

const AllBillsIcon = () => (
  <View style={styles.iconWrapper}>
    <View style={[styles.iconCard, { backgroundColor: '#F3E5F5' }]}>
      <View
        style={{
          width: 22,
          height: 26,
          borderRadius: 3,
          backgroundColor: '#8E24AA',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 4,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            width: 14,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: 1,
            marginBottom: 2,
          }}
        />
        <View
          style={{
            width: 14,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: 1,
            marginBottom: 2,
          }}
        />
        <View
          style={{
            width: 14,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: 1,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: -4,
            width: 10,
            height: 8,
            borderRadius: 2,
            backgroundColor: '#CE93D8',
          }}
        />
      </View>
    </View>
  </View>
);

const NoticesIcon = () => (
  <View style={styles.iconWrapper}>
    <View style={[styles.iconCard, { backgroundColor: '#FFEBEE' }]}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            width: 28,
            height: 24,
            borderRadius: 4,
            backgroundColor: '#E53935',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 4,
          }}
        >
          {/* Megaphone shape */}
          <View
            style={{
              width: 12,
              height: 14,
              borderRadius: 2,
              backgroundColor: '#FF8A80',
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            right: 2,
            bottom: 2,
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: '#FF1744',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 5, fontWeight: '700' }}>
            3
          </Text>
        </View>
      </View>
    </View>
  </View>
);

// ── Bottom Tab Icons ──────────────────────────────────────────────────────────

const HomeTabIcon = ({ active }) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
    }}
  >
    {/* House */}
    <View
      style={{
        width: 18,
        height: 12,
        backgroundColor: active ? '#009688' : '#9E9E9E',
        borderRadius: 1,
        marginTop: 6,
      }}
    />
    <View
      style={{
        position: 'absolute',
        top: 0,
        width: 0,
        height: 0,
        borderLeftWidth: 13,
        borderRightWidth: 13,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: active ? '#009688' : '#9E9E9E',
      }}
    />
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: 6,
        height: 7,
        backgroundColor: active ? '#fff' : '#E0E0E0',
        borderRadius: 1,
      }}
    />
  </View>
);

const BillsTabIcon = ({ active }) => (
  <View
    style={{
      width: 20,
      height: 24,
      borderRadius: 2,
      borderWidth: 2,
      borderColor: active ? '#009688' : '#9E9E9E',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View
      style={{
        width: 12,
        height: 2,
        backgroundColor: active ? '#009688' : '#9E9E9E',
        borderRadius: 1,
        marginBottom: 2,
      }}
    />
    <View
      style={{
        width: 12,
        height: 2,
        backgroundColor: active ? '#009688' : '#9E9E9E',
        borderRadius: 1,
        marginBottom: 2,
      }}
    />
    <View
      style={{
        width: 12,
        height: 2,
        backgroundColor: active ? '#009688' : '#9E9E9E',
        borderRadius: 1,
      }}
    />
  </View>
);

const NoticeTabIcon = ({ active }) => (
  <View
    style={{
      width: 22,
      height: 20,
      borderRadius: 3,
      backgroundColor: active ? '#009688' : '#9E9E9E',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: '#fff', fontSize: 10, fontWeight: '700' }}>!</Text>
  </View>
);

const ProfileTabIcon = ({ active }) => (
  <View style={{ alignItems: 'center' }}>
    <View
      style={{
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: active ? '#009688' : '#9E9E9E',
      }}
    />
    <View
      style={{
        width: 20,
        height: 8,
        borderRadius: 10,
        backgroundColor: active ? '#009688' : '#9E9E9E',
        marginTop: 1,
      }}
    />
  </View>
);

// ── Main Component ─────────────────────────────────────────────────────────────

const HomeScreen = () => {
  const progress = 9 / 12; // 9 out of 12 paid

  const quickActions = [
    {
      id: 1,
      title: 'Pay Bill',
      subtitle: 'Online payment',
      borderColor: '#4A6CF7',
      icon: <PayBillIcon />,
    },
    {
      id: 2,
      title: 'Upload Proof',
      subtitle: 'Bank transfer',
      borderColor: '#FF6D00',
      icon: <UploadProofIcon />,
    },
    {
      id: 3,
      title: 'All Bills',
      subtitle: 'View history',
      borderColor: '#8E24AA',
      icon: <AllBillsIcon />,
    },
    {
      id: 4,
      title: 'Notices',
      subtitle: '3 unread',
      borderColor: '#E53935',
      icon: <NoticesIcon />,
    },
  ];

  return (
    <>
      {' '}
      <StatusBar barStyle="dark-content" backgroundColor="#F0F4F8" />
      <Header name="good mornig" />
      {/* ── HEADER ── */}
      {/* <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning! ☁️</Text>
          <Text style={styles.userName}>Rahul Sharma</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>RS</Text>
        </View>
      </View> */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── BALANCE CARD ── */}
        <View style={styles.balanceCard}>
          {/* Gradient simulation via layered views */}
          <View style={styles.balanceCardBg} />
          <View style={styles.balanceCardOverlay} />

          <View style={styles.balanceCardContent}>
            <Text style={styles.balanceLabel}>Current Balance Due</Text>
            <Text style={styles.balanceAmount}>₹2,400</Text>

            <View style={styles.pendingBadge}>
              <Text style={styles.pendingEmoji}>⚠️</Text>
              <Text style={styles.pendingText}>Feb 2025 pending</Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressSection}>
              <View style={styles.progressLabelRow}>
                <Text style={styles.progressLabel}>Year Progress</Text>
                <Text style={styles.progressCount}>9/12 paid</Text>
              </View>
              <View style={styles.progressTrack}>
                <View
                  style={[styles.progressFill, { width: `${progress * 100}%` }]}
                />
              </View>
            </View>
          </View>

          {/* Decorative circle */}
          <View style={styles.decorCircle1} />
          <View style={styles.decorCircle2} />
        </View>

        {/* ── QUICK ACTIONS ── */}
        <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>

        <View style={styles.actionsGrid}>
          {quickActions.map(action => (
            <TouchableOpacity
              key={action.id}
              style={[
                styles.actionCard,
                { borderTopColor: action.borderColor },
              ]}
              activeOpacity={0.75}
            >
              {action.icon}
              <Text style={styles.actionTitle}>{action.title}</Text>
              <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 20 }} />
        <View style={{gap:12}}>
          <Text style={styles.sectionTitle}>Recent Bills</Text>
          <View style={styles.RecentBills}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 700 }}>
                February 2025
              </Text>
              <Text style={styles.sectionTitle}>Due: Feb 10</Text>
            </View>
            <View>
              <Text style={styles.Price}>₹2,400</Text>
              <Text style={[styles.PriceStatus,{fontSize:15}]}>Due</Text>
            </View>
          </View>
          <View style={styles.RecentBills}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 700 }}>
                March 2025
              </Text>
              <Text style={styles.sectionTitle}>Due: Feb 5</Text>
            </View>
            <View>
              <Text style={[styles.Price,{color:'#15ff00'}]}>₹3,600</Text>
              <Text style={[styles.PriceStatus,{fontSize:15 , backgroundColor:'#15ff0034', color:'#15ff00'}]}>Paid</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* ── BOTTOM TAB BAR ── */}
      <View style={styles.tabBar}>
        {[
          { label: 'HOME', IconComp: HomeTabIcon, active: true },
          { label: 'BILLS', IconComp: BillsTabIcon, active: false },
          { label: 'NOTICE', IconComp: NoticeTabIcon, active: false },
          { label: 'PROFILE', IconComp: ProfileTabIcon, active: false },
        ].map(tab => (
          <TouchableOpacity
            key={tab.label}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <tab.IconComp active={tab.active} />
            <Text
              style={[styles.tabLabel, tab.active && styles.tabLabelActive]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

// ── Styles ─────────────────────────────────────────────────────────────────────

const CARD_RADIUS = 16;
const TEAL_DARK = '#00695C';
const TEAL_MID = '#00897B';
const TEAL_LIGHT = '#4DB6AC';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#EEF2F7',
  },

  // ─ Header ─
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 10,
    backgroundColor: '#EEF2F7',
  },
  greeting: {
    fontSize: 13,
    color: '#78909C',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A2B3C',
    marginTop: 2,
    letterSpacing: 0.1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#009688',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // ─ Scroll ─
  scrollView: { flex: 1 },
  scrollContent: { paddingHorizontal: 16, paddingTop: 4, paddingBottom: 16 },

  // ─ Balance Card ─
  balanceCard: {
    borderRadius: CARD_RADIUS + 2,
    overflow: 'hidden',
    marginBottom: 22,
    height: 175,
    shadowColor: '#00695C',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },
  balanceCardBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: TEAL_DARK,
  },
  balanceCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: TEAL_MID,
    opacity: 0.6,
    borderTopLeftRadius: CARD_RADIUS + 2,
    borderTopRightRadius: CARD_RADIUS + 2,
    transform: [{ skewY: '-8deg' }, { translateY: -20 }],
  },
  balanceCardContent: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: 'space-between',
  },
  balanceLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  balanceAmount: {
    fontSize: 38,
    color: '#FFFFFF',
    fontWeight: '800',
    marginTop: -2,
    letterSpacing: 0.5,
  },
  pendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: -6,
  },
  pendingEmoji: { fontSize: 11, marginRight: 4 },
  pendingText: {
    fontSize: 12,
    color: '#FFE082',
    fontWeight: '600',
  },
  progressSection: { marginTop: 6 },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  progressCount: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
  },
  progressTrack: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  decorCircle1: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: 'rgba(255,255,255,0.06)',
    top: -40,
    right: -30,
  },
  decorCircle2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.05)',
    bottom: -20,
    right: 60,
  },

  // ─ Section Title ─
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#90A4AE',
    letterSpacing: 1.5,
    marginBottom: 12,
    marginLeft: 2,
  },

  // ─ Actions Grid ─
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionCard: {
    width: (width - 44) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: CARD_RADIUS,
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderTopWidth: 3,
    alignItems: 'center',
    shadowColor: '#607D8B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconWrapper: {
    marginBottom: 10,
  },
  iconCard: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A2B3C',
    marginBottom: 3,
    textAlign: 'center',
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#90A4AE',
    fontWeight: '400',
    textAlign: 'center',
  },

  // ─ Tab Bar ─
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#ECEFF1',
    shadowColor: '#607D8B',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 12,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
  },
  tabLabel: {
    fontSize: 9,
    fontWeight: '600',
    color: '#9E9E9E',
    marginTop: 4,
    letterSpacing: 0.8,
  },
  tabLabelActive: {
    color: '#009688',
  },
  RecentBills: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Price: {
    fontSize: 30,
    fontWeight: 700,
    color: 'red',
  },
  PriceStatus:{
    color:'red',
    backgroundColor:'#ff31313e',
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:1,
    borderRadius:20,
    textAlign:'center'
    
  }
});

export default HomeScreen;
