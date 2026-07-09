import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../masicn';
import type { RootStackParamList } from './types';
import { HomeScreen } from '../screens/HomeScreen';
import { ComingSoonScreen } from '../screens/ComingSoonScreen';
import { BadgeScreen } from '../screens/components/BadgeScreen';
import { TagScreen } from '../screens/components/TagScreen';
import { DotScreen } from '../screens/components/DotScreen';
import { AvatarScreen } from '../screens/components/AvatarScreen';
import { AvatarGroupScreen } from '../screens/components/AvatarGroupScreen';
import { ImageScreen } from '../screens/components/ImageScreen';
import { CardScreen } from '../screens/components/CardScreen';
import { ListItemScreen } from '../screens/components/ListItemScreen';
import { AlertScreen } from '../screens/components/AlertScreen';
import { TickerScreen } from '../screens/components/TickerScreen';
import { ExpandableScreen } from '../screens/components/ExpandableScreen';
import { SpinnerScreen } from '../screens/components/SpinnerScreen';
import { SkeletonScreen } from '../screens/components/SkeletonScreen';
import { ShimmerScreen } from '../screens/components/ShimmerScreen';
import { ProgressScreen } from '../screens/components/ProgressScreen';
import { ProgressRingScreen } from '../screens/components/ProgressRingScreen';
import { SnackbarScreen } from '../screens/components/SnackbarScreen';
import { ToastScreen } from '../screens/components/ToastScreen';
import { LoaderScreen } from '../screens/components/LoaderScreen';
import { ButtonScreen } from '../screens/components/ButtonScreen';
import { FABScreen } from '../screens/components/FABScreen';
import { RatingScreen } from '../screens/components/RatingScreen';
import { SwipeButtonScreen } from '../screens/components/SwipeButtonScreen';
import { TextInputScreen } from '../screens/components/TextInputScreen';
import { TextareaScreen } from '../screens/components/TextareaScreen';
import { SecureInputScreen } from '../screens/components/SecureInputScreen';
import { SearchBarScreen } from '../screens/components/SearchBarScreen';
import { CheckboxScreen } from '../screens/components/CheckboxScreen';
import { CheckboxGroupScreen } from '../screens/components/CheckboxGroupScreen';
import { RadioScreen } from '../screens/components/RadioScreen';
import { SwitchScreen } from '../screens/components/SwitchScreen';
import { SelectScreen } from '../screens/components/SelectScreen';
import { SliderScreen } from '../screens/components/SliderScreen';
import { RangeSliderScreen } from '../screens/components/RangeSliderScreen';
import { SegmentScreen } from '../screens/components/SegmentScreen';
import { ToggleGroupScreen } from '../screens/components/ToggleGroupScreen';
import { ChipScreen } from '../screens/components/ChipScreen';
import { TabsScreen } from '../screens/components/TabsScreen';
import { DockScreen } from '../screens/components/DockScreen';
import { AccordionScreen } from '../screens/components/AccordionScreen';
import { CollapsibleScreen } from '../screens/components/CollapsibleScreen';
import { DetailRowScreen } from '../screens/components/DetailRowScreen';
import { PinScreen } from '../screens/components/PinScreen';
import { LinkScreen } from '../screens/components/LinkScreen';
import { BottomSheetScreen } from '../screens/components/BottomSheetScreen';
import { TopSheetScreen } from '../screens/components/TopSheetScreen';
import { LeftSheetScreen } from '../screens/components/LeftSheetScreen';
import { RightSheetScreen } from '../screens/components/RightSheetScreen';
import { DrawerScreen } from '../screens/components/DrawerScreen';
import { ModalScreen } from '../screens/components/ModalScreen';
import { PopoverScreen } from '../screens/components/PopoverScreen';
import { ContextMenuScreen } from '../screens/components/ContextMenuScreen';
import { MenuScreen } from '../screens/components/MenuScreen';
import { TooltipScreen } from '../screens/components/TooltipScreen';
import { CarouselScreen } from '../screens/components/CarouselScreen';
import { ActionSheetScreen } from '../screens/components/ActionSheetScreen';
import { ConfirmScreen } from '../screens/components/ConfirmScreen';
import { EmptyStateScreen } from '../screens/components/EmptyStateScreen';
import { FormScreen } from '../screens/components/FormScreen';
import { NumericScreen } from '../screens/components/NumericScreen';
import { CodeInputScreen } from '../screens/components/CodeInputScreen';
import { PaginationScreen } from '../screens/components/PaginationScreen';
import { PhoneScreen } from '../screens/components/PhoneScreen';
import { DualSheetScreen } from '../screens/components/DualSheetScreen';
import { StepperScreen } from '../screens/components/StepperScreen';
import { SwipeableScreen } from '../screens/components/SwipeableScreen';
import { ChipInputScreen } from '../screens/components/ChipInputScreen';
import { TimelineScreen } from '../screens/components/TimelineScreen';
import { JsonTreeScreen } from '../screens/components/JsonTreeScreen';
import { BreadcrumbScreen } from '../screens/components/BreadcrumbScreen';
import { RefreshableListScreen } from '../screens/layouts/RefreshableListScreen';
import { RefreshableScrollViewScreen } from '../screens/layouts/RefreshableScrollViewScreen';
import { MasonryGridScreen } from '../screens/layouts/MasonryGridScreen';

export const SCREEN_MAP: Record<string, React.ComponentType<object>> = {
  // Display
  Badge: BadgeScreen,
  Tag: TagScreen,
  Dot: DotScreen,
  Avatar: AvatarScreen,
  AvatarGroup: AvatarGroupScreen,
  Image: ImageScreen,
  Card: CardScreen,
  ListItem: ListItemScreen,
  Alert: AlertScreen,
  Ticker: TickerScreen,
  Expandable: ExpandableScreen,
  // Feedback
  Spinner: SpinnerScreen,
  Skeleton: SkeletonScreen,
  Shimmer: ShimmerScreen,
  Progress: ProgressScreen,
  ProgressRing: ProgressRingScreen,
  Snackbar: SnackbarScreen,
  Toast: ToastScreen,
  Loader: LoaderScreen,
  // Actions
  Button: ButtonScreen,
  FAB: FABScreen,
  Rating: RatingScreen,
  SwipeButton: SwipeButtonScreen,
  // Forms
  TextInput: TextInputScreen,
  Textarea: TextareaScreen,
  SecureInput: SecureInputScreen,
  SearchBar: SearchBarScreen,
  Checkbox: CheckboxScreen,
  CheckboxGroup: CheckboxGroupScreen,
  Radio: RadioScreen,
  Switch: SwitchScreen,
  Select: SelectScreen,
  Slider: SliderScreen,
  RangeSlider: RangeSliderScreen,
  Segment: SegmentScreen,
  ToggleGroup: ToggleGroupScreen,
  Chip: ChipScreen,
  // Navigation
  Tabs: TabsScreen,
  Dock: DockScreen,
  Accordion: AccordionScreen,
  Collapsible: CollapsibleScreen,
  DetailRow: DetailRowScreen,
  Pin: PinScreen,
  Link: LinkScreen,
  // Overlays
  BottomSheet: BottomSheetScreen,
  TopSheet: TopSheetScreen,
  LeftSheet: LeftSheetScreen,
  RightSheet: RightSheetScreen,
  Drawer: DrawerScreen,
  Modal: ModalScreen,
  Popover: PopoverScreen,
  ContextMenu: ContextMenuScreen,
  Menu: MenuScreen,
  Tooltip: TooltipScreen,
  // Blocks
  Carousel: CarouselScreen,
  ActionSheet: ActionSheetScreen,
  Confirm: ConfirmScreen,
  EmptyState: EmptyStateScreen,
  Form: FormScreen,
  Numeric: NumericScreen,
  CodeInput: CodeInputScreen,
  Pagination: PaginationScreen,
  Phone: PhoneScreen,
  DualSheet: DualSheetScreen,
  Stepper: StepperScreen,
  Swipeable: SwipeableScreen,
  ChipInput: ChipInputScreen,
  Timeline: TimelineScreen,
  JsonTree: JsonTreeScreen,
  Breadcrumb: BreadcrumbScreen,
  // Layouts
  RefreshableList: RefreshableListScreen,
  RefreshableScrollView: RefreshableScrollViewScreen,
  MasonryGrid: MasonryGridScreen,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function ComponentDetailScreen({
  route,
}: {
  route: { params: { name: string } };
}) {
  const { name } = route.params;
  const Screen = SCREEN_MAP[name] ?? ComingSoonScreen;
  return <Screen />;
}

export function AppNavigator() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: { color: theme.colors.textPrimary },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ComponentDetail"
        component={ComponentDetailScreen as React.ComponentType<object>}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
