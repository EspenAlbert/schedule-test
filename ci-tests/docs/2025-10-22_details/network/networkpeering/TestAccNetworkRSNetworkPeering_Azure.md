# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 43 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, FAIL(x 31) PASS(x 12)
Success rate: 27.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-30 07:54](#error-2025-09-30t0754340000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68db89c1bb7b8c0d703483ec/peers | qa |  | 125.09s
[2025-09-30 15:19](#error-2025-09-30t1519070000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68dbf1f2ce185e38b70f0148/peers | qa |  | 125.08s
[2025-10-01 00:40](#error-2025-10-01t0040370000) |  | dev |  | 239.07s
[2025-10-01 03:34](#error-2025-10-01t0334370000) |  | dev |  | 253.09s
[2025-10-01 05:07](#error-2025-10-01t0507160000) |  | dev |  | 259.03s
[2025-10-01 08:22](#error-2025-10-01t0822380000) |  | dev |  | 255.02s
[2025-10-01 09:21](#error-2025-10-01t0921540000) |  | dev |  | 248.09s
[2025-10-01 10:53](#error-2025-10-01t1053080000) |  | dev |  | 247.08s
[2025-10-01 12:00](#error-2025-10-01t1200480000) |  | dev |  | 239.07s
[2025-10-01 14:27](#error-2025-10-01t1427050000) |  | dev |  | 256.03s
[2025-10-02 01:28](#error-2025-10-02t0128350000) |  | dev |  | 255.01s
[2025-10-03 01:20](#error-2025-10-03t0120270000) |  | dev |  | 248.09s
[2025-10-04 01:28](#error-2025-10-04t0128000000) |  | dev |  | 693.03s
[2025-10-05 00:41](#error-2025-10-05t0041500000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68e1bbe6f758b3057a1ac13d/peers | qa |  | 124.09s
[2025-10-06 00:40](#error-2025-10-06t0040510000) |  | dev |  | 252.07s
[2025-10-07 01:29](#error-2025-10-07t0129370000) |  | dev |  | 311.06s
[2025-10-08 00:40](#error-2025-10-08t0040200000) |  | dev |  | 331.09s
[2025-10-09 00:39](#error-2025-10-09t0039280000) |  | dev |  | 581.04s
[2025-10-10 00:40](#error-2025-10-10t0040120000) |  | dev |  | 452.10s
[2025-10-11 00:38](#error-2025-10-11t0038050000) |  | dev |  | 442.01s
[2025-10-12 00:41](#error-2025-10-12t0041110000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68eaf637bae6807c754957c7/peers | qa |  | 125.03s
[2025-10-13 00:42](#error-2025-10-13t0042010000) |  | dev |  | 260.04s
[2025-10-13 15:15](#error-2025-10-13t1515090000) |  | dev |  | 260.09s
[2025-10-14 00:40](#error-2025-10-14t0040110000) |  | dev |  | 243.06s
[2025-10-15 00:40](#error-2025-10-15t0040480000) |  | dev |  | 251.04s
[2025-10-16 00:42](#error-2025-10-16t0042310000) |  | dev |  | 242.07s
[2025-10-17 00:42](#error-2025-10-17t0042080000) |  | dev |  | 255.09s
[2025-10-18 00:35](#error-2025-10-18t0035070000) |  | dev |  | 249.10s
[2025-10-19 00:43](#error-2025-10-19t0043550000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68f4316321ed692ad0016104/peers | qa | flaky_500 | 125.04s
[2025-10-20 00:42](#error-2025-10-20t0042480000) |  | dev | dangling_resource | 270.04s
[2025-10-22 08:40](#error-2025-10-22t0840040000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68f8956bab288813b27fd030/peers | qa |  | 125.02s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 4 minutes
- 2025-09-24 PASS 4 minutes
- 2025-09-25 PASS 4 minutes
- 2025-09-26 PASS 4 minutes
- 2025-09-27 PASS 4 minutes
- 2025-09-28 PASS 4 minutes
- 2025-09-29 PASS 4 minutes
- 2025-09-30
  - PASS 4 minutes
  - FAIL 2 minutes

### Error 2025-09-30T07:54:34+00:00
```
2025-09-30T07:54:34.9638587Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-09-30T07:54:34.9639747Z     resource_test.go:30: Creating execution project: test-acc-tf-p-7402385264830278746
2025-09-30T07:54:34.9648148Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-09-30T07:54:34.9660315Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-09-30T07:54:34.9660822Z     resource_test.go:39: Step 1/3 error: Error running apply: exit status 1
2025-09-30T07:54:34.9661204Z         
2025-09-30T07:54:34.9662894Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db89c1bb7b8c0d703483ec/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-09-30T07:54:34.9664067Z         
2025-09-30T07:54:34.9664411Z           with mongodbatlas_network_peering.test,
2025-09-30T07:54:34.9665068Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-09-30T07:54:34.9665677Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-09-30T07:54:34.9666005Z         
2025-09-30T07:54:34.9707343Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (125.90s)
```

  - PASS 4 minutes
  - FAIL 2 minutes

### Error 2025-09-30T15:19:07+00:00
```
2025-09-30T15:19:07.7381009Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-09-30T15:19:07.7381640Z     resource_test.go:30: Creating execution project: test-acc-tf-p-5351765961959207796
2025-09-30T15:19:07.7389664Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-09-30T15:19:07.7403804Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-09-30T15:19:07.7404351Z     resource_test.go:39: Step 1/3 error: Error running apply: exit status 1
2025-09-30T15:19:07.7404800Z         
2025-09-30T15:19:07.7406833Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf1f2ce185e38b70f0148/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-09-30T15:19:07.7408222Z         
2025-09-30T15:19:07.7408662Z           with mongodbatlas_network_peering.test,
2025-09-30T15:19:07.7409363Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-09-30T15:19:07.7410039Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-09-30T15:19:07.7410420Z         
2025-09-30T15:19:07.7430845Z    test_step_number=1 test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/ab35b207-4070-4e47-9d2a-8d6e0e9de7de/terraform test_working_directory=/tmp/plugintest3713884189
2025-09-30T15:19:07.7449027Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (125.75s)
```

- 2025-10-01
  - FAIL 3 minutes

### Error 2025-10-01T00:40:37+00:00
```
2025-10-01T00:40:37.7528542Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-01T00:40:37.7529125Z     resource_test.go:30: Creating execution project: test-acc-tf-p-6943321105642610896
2025-10-01T00:40:37.7535106Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T00:40:37.7553753Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T00:40:37.7554270Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-01T00:40:37.7554651Z         
2025-10-01T00:40:37.7555572Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-01T00:40:37.7556252Z         
2025-10-01T00:40:37.7556604Z           with mongodbatlas_network_peering.test,
2025-10-01T00:40:37.7557272Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-01T00:40:37.7557889Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-01T00:40:37.7558215Z         
2025-10-01T00:40:37.7561060Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (239.68s)
```

  - FAIL 4 minutes

### Error 2025-10-01T03:34:37+00:00
```
2025-10-01T03:34:37.8758406Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-01T03:34:37.8758982Z     resource_test.go:30: Creating execution project: test-acc-tf-p-4525000003414546795
2025-10-01T03:34:37.8764678Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T03:34:37.8780065Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T03:34:37.8780578Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-01T03:34:37.8780952Z         
2025-10-01T03:34:37.8781858Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-01T03:34:37.8782519Z         
2025-10-01T03:34:37.8782862Z           with mongodbatlas_network_peering.test,
2025-10-01T03:34:37.8783529Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-01T03:34:37.8784145Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-01T03:34:37.8784464Z         
2025-10-01T03:34:37.8786816Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (253.90s)
```

  - FAIL 4 minutes

### Error 2025-10-01T05:07:16+00:00
```
2025-10-01T05:07:16.6753486Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-01T05:07:16.6754165Z     resource_test.go:30: Creating execution project: test-acc-tf-p-8821942161821408724
2025-10-01T05:07:16.6760695Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T05:07:16.6778304Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T05:07:16.6778820Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-01T05:07:16.6779211Z         
2025-10-01T05:07:16.6780221Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-01T05:07:16.6780889Z         
2025-10-01T05:07:16.6781233Z           with mongodbatlas_network_peering.test,
2025-10-01T05:07:16.6781900Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-01T05:07:16.6782757Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-01T05:07:16.6783127Z         
2025-10-01T05:07:16.6785286Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (259.27s)
```

  - FAIL 4 minutes

### Error 2025-10-01T08:22:38+00:00
```
2025-10-01T08:22:38.2099202Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-01T08:22:38.2101960Z     resource_test.go:30: Creating execution project: test-acc-tf-p-3456935536840868569
2025-10-01T08:22:38.2109600Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T08:22:38.2133790Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T08:22:38.2134332Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-01T08:22:38.2134862Z         
2025-10-01T08:22:38.2136234Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-01T08:22:38.2136918Z         
2025-10-01T08:22:38.2137288Z           with mongodbatlas_network_peering.test,
2025-10-01T08:22:38.2138532Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-01T08:22:38.2139200Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-01T08:22:38.2139533Z         
2025-10-01T08:22:38.2141934Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (255.21s)
```

  - FAIL 4 minutes

### Error 2025-10-01T09:21:54+00:00
```
2025-10-01T09:21:54.8700293Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-01T09:21:54.8701005Z     resource_test.go:30: Creating execution project: test-acc-tf-p-2274158102132382776
2025-10-01T09:21:54.8707716Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T09:21:54.8728229Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T09:21:54.8728743Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-01T09:21:54.8729126Z         
2025-10-01T09:21:54.8730026Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-01T09:21:54.8730673Z         
2025-10-01T09:21:54.8731017Z           with mongodbatlas_network_peering.test,
2025-10-01T09:21:54.8731676Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-01T09:21:54.8732292Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-01T09:21:54.8732621Z         
2025-10-01T09:21:54.8735521Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (248.85s)
```

  - FAIL 4 minutes

### Error 2025-10-01T10:53:08+00:00
```
2025-10-01T10:53:08.8550988Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-01T10:53:08.8551966Z     resource_test.go:30: Creating execution project: test-acc-tf-p-4864471981990454311
2025-10-01T10:53:08.8561011Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T10:53:08.8594641Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T10:53:08.8595554Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-01T10:53:08.8596221Z         
2025-10-01T10:53:08.8597881Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-01T10:53:08.8599031Z         
2025-10-01T10:53:08.8599645Z           with mongodbatlas_network_peering.test,
2025-10-01T10:53:08.8601020Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-01T10:53:08.8602108Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-01T10:53:08.8602658Z         
2025-10-01T10:53:08.8607164Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (247.77s)
```

  - FAIL 3 minutes

### Error 2025-10-01T12:00:48+00:00
```
2025-10-01T12:00:48.4176739Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-01T12:00:48.4177682Z     resource_test.go:30: Creating execution project: test-acc-tf-p-3282241757448380826
2025-10-01T12:00:48.4186285Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T12:00:48.4208969Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T12:00:48.4209506Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-01T12:00:48.4209910Z         
2025-10-01T12:00:48.4210826Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-01T12:00:48.4211505Z         
2025-10-01T12:00:48.4211871Z           with mongodbatlas_network_peering.test,
2025-10-01T12:00:48.4212541Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-01T12:00:48.4213351Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-01T12:00:48.4213705Z         
2025-10-01T12:00:48.4216373Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (239.71s)
```

  - FAIL 4 minutes

### Error 2025-10-01T14:27:05+00:00
```
2025-10-01T14:27:05.6134109Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-01T14:27:05.6134973Z     resource_test.go:30: Creating execution project: test-acc-tf-p-1459747554048820963
2025-10-01T14:27:05.6142313Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T14:27:05.6161388Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-01T14:27:05.6161884Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-01T14:27:05.6162261Z         
2025-10-01T14:27:05.6163156Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-01T14:27:05.6163794Z         
2025-10-01T14:27:05.6164131Z           with mongodbatlas_network_peering.test,
2025-10-01T14:27:05.6164790Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-01T14:27:05.6165393Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-01T14:27:05.6165708Z         
2025-10-01T14:27:05.6168457Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (256.34s)
```

- 2025-10-02

### Error 2025-10-02T01:28:35+00:00
```
2025-10-02T01:28:35.6751915Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-02T01:28:35.6753053Z     resource_test.go:30: Creating execution project: test-acc-tf-p-3538230035222781367
2025-10-02T01:28:35.6763671Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-02T01:28:35.6785436Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-02T01:28:35.6786081Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-02T01:28:35.6786565Z         
2025-10-02T01:28:35.6787592Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-02T01:28:35.6788529Z         
2025-10-02T01:28:35.6788890Z           with mongodbatlas_network_peering.test,
2025-10-02T01:28:35.6789820Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-02T01:28:35.6790550Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-02T01:28:35.6790885Z         
2025-10-02T01:28:35.6793085Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (255.06s)
```

- 2025-10-03

### Error 2025-10-03T01:20:27+00:00
```
2025-10-03T01:20:27.2275929Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-03T01:20:27.2277010Z     resource_test.go:30: Creating execution project: test-acc-tf-p-6323760074768708668
2025-10-03T01:20:27.2288539Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-03T01:20:27.2307540Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-03T01:20:27.2308183Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-03T01:20:27.2308796Z         
2025-10-03T01:20:27.2309830Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-03T01:20:27.2310608Z         
2025-10-03T01:20:27.2311034Z           with mongodbatlas_network_peering.test,
2025-10-03T01:20:27.2311763Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-03T01:20:27.2312472Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-03T01:20:27.2312925Z         
2025-10-03T01:20:27.2314854Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (248.93s)
```

- 2025-10-04

### Error 2025-10-04T01:28:00+00:00
```
2025-10-04T01:28:00.6643869Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-04T01:28:00.6644939Z     resource_test.go:30: Creating execution project: test-acc-tf-p-6137814283233302332
2025-10-04T01:28:00.6654413Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-04T01:28:00.6688422Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-04T01:28:00.6689303Z     resource_test.go:39: Step 1/3 error: Error running apply: exit status 1
2025-10-04T01:28:00.6690133Z         
2025-10-04T01:28:00.6690818Z         Error: peer networking is in a failed state: RETRYABLE
2025-10-04T01:28:00.6691386Z         
2025-10-04T01:28:00.6692011Z           with mongodbatlas_network_peering.test,
2025-10-04T01:28:00.6693182Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-04T01:28:00.6694261Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-04T01:28:00.6694827Z         
2025-10-04T01:28:00.6695504Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (693.32s)
```

- 2025-10-05

### Error 2025-10-05T00:41:50+00:00
```
2025-10-05T00:41:50.6796176Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-05T00:41:50.6796755Z     resource_test.go:30: Creating execution project: test-acc-tf-p-1524743430843129758
2025-10-05T00:41:50.6802343Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-05T00:41:50.6815910Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-05T00:41:50.6816576Z     resource_test.go:39: Step 1/3 error: Error running apply: exit status 1
2025-10-05T00:41:50.6817107Z         
2025-10-05T00:41:50.6820191Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbe6f758b3057a1ac13d/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-05T00:41:50.6821509Z         
2025-10-05T00:41:50.6821949Z           with mongodbatlas_network_peering.test,
2025-10-05T00:41:50.6822618Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-05T00:41:50.6823234Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-05T00:41:50.6823569Z         
2025-10-05T00:41:50.6862583Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (124.95s)
```

- 2025-10-06

### Error 2025-10-06T00:40:51+00:00
```
2025-10-06T00:40:51.6147470Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-06T00:40:51.6148021Z     resource_test.go:30: Creating execution project: test-acc-tf-p-3039991319048048322
2025-10-06T00:40:51.6154297Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-06T00:40:51.6171614Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-06T00:40:51.6172097Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-06T00:40:51.6172478Z         
2025-10-06T00:40:51.6173295Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-06T00:40:51.6173903Z         
2025-10-06T00:40:51.6174237Z           with mongodbatlas_network_peering.test,
2025-10-06T00:40:51.6174843Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-06T00:40:51.6175404Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-06T00:40:51.6175723Z         
2025-10-06T00:40:51.6178467Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (252.73s)
```

- 2025-10-07

### Error 2025-10-07T01:29:37+00:00
```
2025-10-07T01:29:37.4374656Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-07T01:29:37.4375484Z     resource_test.go:30: Creating execution project: test-acc-tf-p-6771349850712442251
2025-10-07T01:29:37.4383364Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-07T01:29:37.4405682Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-07T01:29:37.4406201Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-07T01:29:37.4406698Z         
2025-10-07T01:29:37.4407718Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-07T01:29:37.4408469Z         
2025-10-07T01:29:37.4408898Z           with mongodbatlas_network_peering.test,
2025-10-07T01:29:37.4409610Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-07T01:29:37.4410486Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-07T01:29:37.4410895Z         
2025-10-07T01:29:37.4412416Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (311.60s)
```

- 2025-10-08

### Error 2025-10-08T00:40:20+00:00
```
2025-10-08T00:40:20.9106735Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-08T00:40:20.9107329Z     resource_test.go:30: Creating execution project: test-acc-tf-p-2264205579346123624
2025-10-08T00:40:20.9114172Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-08T00:40:20.9116665Z   diagnostic_summary=
2025-10-08T00:40:20.9119256Z    diagnostic_detail="" tf_proto_version=6.10
2025-10-08T00:40:20.9132541Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-08T00:40:20.9133055Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-08T00:40:20.9133573Z         
2025-10-08T00:40:20.9134551Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-08T00:40:20.9135210Z         
2025-10-08T00:40:20.9135557Z           with mongodbatlas_network_peering.test,
2025-10-08T00:40:20.9136222Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-08T00:40:20.9136979Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-08T00:40:20.9137325Z         
2025-10-08T00:40:20.9139521Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (331.88s)
```

- 2025-10-09

### Error 2025-10-09T00:39:28+00:00
```
2025-10-09T00:39:28.7717633Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-09T00:39:28.7718223Z     resource_test.go:30: Creating execution project: test-acc-tf-p-655691968050818156
2025-10-09T00:39:28.7725052Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-09T00:39:28.7745056Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-09T00:39:28.7745594Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-09T00:39:28.7745996Z         
2025-10-09T00:39:28.7746907Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-09T00:39:28.7747575Z         
2025-10-09T00:39:28.7747939Z           with mongodbatlas_network_peering.test,
2025-10-09T00:39:28.7748746Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-09T00:39:28.7749383Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-09T00:39:28.7749930Z         
2025-10-09T00:39:28.7751332Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (581.43s)
```

- 2025-10-10

### Error 2025-10-10T00:40:12+00:00
```
2025-10-10T00:40:12.8803085Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-10T00:40:12.8803803Z     resource_test.go:30: Creating execution project: test-acc-tf-p-6964628271802344254
2025-10-10T00:40:12.8809764Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-10T00:40:12.8830526Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-10T00:40:12.8831069Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-10T00:40:12.8831477Z         
2025-10-10T00:40:12.8832409Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-10T00:40:12.8833073Z         
2025-10-10T00:40:12.8833436Z           with mongodbatlas_network_peering.test,
2025-10-10T00:40:12.8834291Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-10T00:40:12.8834942Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-10T00:40:12.8835518Z         
2025-10-10T00:40:12.8837354Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (452.98s)
```

- 2025-10-11

### Error 2025-10-11T00:38:05+00:00
```
2025-10-11T00:38:05.0199843Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-11T00:38:05.0200834Z     resource_test.go:30: Creating execution project: test-acc-tf-p-5128290752981962620
2025-10-11T00:38:05.0210284Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-11T00:38:05.0246044Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-11T00:38:05.0246930Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-11T00:38:05.0247579Z         
2025-10-11T00:38:05.0249164Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-11T00:38:05.0250319Z         
2025-10-11T00:38:05.0250921Z           with mongodbatlas_network_peering.test,
2025-10-11T00:38:05.0252284Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-11T00:38:05.0253370Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-11T00:38:05.0253941Z         
2025-10-11T00:38:05.0256447Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (442.10s)
```

- 2025-10-12

### Error 2025-10-12T00:41:11+00:00
```
2025-10-12T00:41:11.0414911Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-12T00:41:11.0415506Z     resource_test.go:30: Creating execution project: test-acc-tf-p-3537434970927909157
2025-10-12T00:41:11.0421477Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-12T00:41:11.0434924Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-12T00:41:11.0435442Z     resource_test.go:39: Step 1/3 error: Error running apply: exit status 1
2025-10-12T00:41:11.0435861Z         
2025-10-12T00:41:11.0437577Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf637bae6807c754957c7/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-12T00:41:11.0438922Z         
2025-10-12T00:41:11.0439281Z           with mongodbatlas_network_peering.test,
2025-10-12T00:41:11.0439954Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-12T00:41:11.0440581Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-12T00:41:11.0440916Z         
2025-10-12T00:41:11.0479193Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (125.32s)
```

- 2025-10-13
  - FAIL 4 minutes

### Error 2025-10-13T00:42:01+00:00
```
2025-10-13T00:42:01.3230780Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-13T00:42:01.3231839Z     resource_test.go:30: Creating execution project: test-acc-tf-p-5169569229134705715
2025-10-13T00:42:01.3241965Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-13T00:42:01.3274403Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-13T00:42:01.3275299Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-13T00:42:01.3275968Z         
2025-10-13T00:42:01.3277555Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-13T00:42:01.3278692Z         
2025-10-13T00:42:01.3279303Z           with mongodbatlas_network_peering.test,
2025-10-13T00:42:01.3280452Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-13T00:42:01.3281511Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-13T00:42:01.3282088Z         
2025-10-13T00:42:01.3287145Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (260.40s)
```

  - FAIL 4 minutes

### Error 2025-10-13T15:15:09+00:00
```
2025-10-13T15:15:09.4828655Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-13T15:15:09.4829780Z     resource_test.go:30: Creating execution project: test-acc-tf-p-9164092169008734731
2025-10-13T15:15:09.4832772Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-13T15:15:09.4850113Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-13T15:15:09.4850742Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-13T15:15:09.4851239Z         
2025-10-13T15:15:09.4852248Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-13T15:15:09.4853005Z         
2025-10-13T15:15:09.4853613Z           with mongodbatlas_network_peering.test,
2025-10-13T15:15:09.4854688Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-13T15:15:09.4855458Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-13T15:15:09.4855902Z         
2025-10-13T15:15:09.4856902Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (260.89s)
```

- 2025-10-14

### Error 2025-10-14T00:40:11+00:00
```
2025-10-14T00:40:11.4283029Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-14T00:40:11.4283934Z     resource_test.go:30: Creating execution project: test-acc-tf-p-9036917013584610176
2025-10-14T00:40:11.4291175Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-14T00:40:11.4311774Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-14T00:40:11.4312308Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-14T00:40:11.4312695Z         
2025-10-14T00:40:11.4313621Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-14T00:40:11.4314292Z         
2025-10-14T00:40:11.4314647Z           with mongodbatlas_network_peering.test,
2025-10-14T00:40:11.4315330Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-14T00:40:11.4315959Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-14T00:40:11.4316437Z         
2025-10-14T00:40:11.4319415Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (243.63s)
```

- 2025-10-15

### Error 2025-10-15T00:40:48+00:00
```
2025-10-15T00:40:48.5806947Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-15T00:40:48.5807665Z     resource_test.go:30: Creating execution project: test-acc-tf-p-8373011056631995563
2025-10-15T00:40:48.5813581Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-15T00:40:48.5833163Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-15T00:40:48.5833898Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-15T00:40:48.5834324Z         
2025-10-15T00:40:48.5835287Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-15T00:40:48.5836101Z         
2025-10-15T00:40:48.5836491Z           with mongodbatlas_network_peering.test,
2025-10-15T00:40:48.5837194Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-15T00:40:48.5837843Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-15T00:40:48.5838212Z         
2025-10-15T00:40:48.5840438Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (251.36s)
```

- 2025-10-16

### Error 2025-10-16T00:42:31+00:00
```
2025-10-16T00:42:31.6398034Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-16T00:42:31.6398674Z     resource_test.go:30: Creating execution project: test-acc-tf-p-2266131550828915720
2025-10-16T00:42:31.6404182Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-16T00:42:31.6424645Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-16T00:42:31.6425175Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-16T00:42:31.6425583Z         
2025-10-16T00:42:31.6426525Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-16T00:42:31.6427377Z         
2025-10-16T00:42:31.6427729Z           with mongodbatlas_network_peering.test,
2025-10-16T00:42:31.6428416Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-16T00:42:31.6429051Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-16T00:42:31.6429388Z         
2025-10-16T00:42:31.6432116Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (242.72s)
```

- 2025-10-17

### Error 2025-10-17T00:42:08+00:00
```
2025-10-17T00:42:08.5105352Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-17T00:42:08.5106236Z     resource_test.go:30: Creating execution project: test-acc-tf-p-2590336325275181453
2025-10-17T00:42:08.5113846Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-17T00:42:08.5129750Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-17T00:42:08.5130270Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-17T00:42:08.5130656Z         
2025-10-17T00:42:08.5131580Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-17T00:42:08.5132429Z         
2025-10-17T00:42:08.5132955Z           with mongodbatlas_network_peering.test,
2025-10-17T00:42:08.5133637Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-17T00:42:08.5134252Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-17T00:42:08.5134586Z         
2025-10-17T00:42:08.5136675Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (255.94s)
```

- 2025-10-18

### Error 2025-10-18T00:35:07+00:00
```
2025-10-18T00:35:07.7927299Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-18T00:35:07.7928270Z     resource_test.go:30: Creating execution project: test-acc-tf-p-3852498615005479130
2025-10-18T00:35:07.7937076Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-18T00:35:07.7939160Z   diagnostic_summary=
2025-10-18T00:35:07.7941890Z    tf_rpc=ApplyResourceChange tf_req_id=84a66162-40d1-6d42-98fc-0891202e18b6
2025-10-18T00:35:07.7951363Z    test_step_number=2
2025-10-18T00:35:07.7951841Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-18T00:35:07.7952399Z         
2025-10-18T00:35:07.7953341Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-18T00:35:07.7954016Z         
2025-10-18T00:35:07.7954721Z           with mongodbatlas_network_peering.test,
2025-10-18T00:35:07.7955939Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-18T00:35:07.7957006Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-18T00:35:07.7957365Z         
2025-10-18T00:35:07.7959256Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (249.97s)
```

- 2025-10-19

### Error 2025-10-19T00:43:55+00:00
```
2025-10-19T00:43:55.9740375Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-19T00:43:55.9740941Z     resource_test.go:30: Creating execution project: test-acc-tf-p-22165087885187369
2025-10-19T00:43:55.9747331Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-19T00:43:55.9759632Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-19T00:43:55.9760140Z     resource_test.go:39: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:43:55.9760527Z         
2025-10-19T00:43:55.9762215Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4316321ed692ad0016104/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-19T00:43:55.9763500Z         
2025-10-19T00:43:55.9763849Z           with mongodbatlas_network_peering.test,
2025-10-19T00:43:55.9764510Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-19T00:43:55.9765130Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-19T00:43:55.9765649Z         
2025-10-19T00:43:55.9771870Z   diagnostic_summary=
2025-10-19T00:43:55.9774579Z    tf_resource_type=mongodbatlas_network_peering tf_rpc=ApplyResourceChange
2025-10-19T00:43:55.9790807Z    test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/e9fb7c76-9746-4d67-b259-1067b7548318/terraform
2025-10-19T00:43:55.9803138Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (125.38s)
```

- 2025-10-20
  - FAIL 4 minutes

### Error 2025-10-20T00:42:48+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-10-20T00:42:48.442000+00:00-TestAccNetworkRSNetworkPeering_Azure',confidence=1.0,ts_when='2 days ago')

```
2025-10-20T00:42:48.4421172Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-20T00:42:48.4421751Z     resource_test.go:30: Creating execution project: test-acc-tf-p-321399276708893456
2025-10-20T00:42:48.4427119Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-20T00:42:48.4447086Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-20T00:42:48.4447832Z     resource_test.go:39: Step 2/3 error: Error running apply: exit status 1
2025-10-20T00:42:48.4448236Z         
2025-10-20T00:42:48.4449149Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-10-20T00:42:48.4449816Z         
2025-10-20T00:42:48.4450174Z           with mongodbatlas_network_peering.test,
2025-10-20T00:42:48.4450844Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-20T00:42:48.4451469Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-20T00:42:48.4451809Z         
2025-10-20T00:42:48.4454048Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (270.42s)
```

  - PASS 4 minutes
- 2025-10-21 PASS 4 minutes
- 2025-10-22
  - PASS 4 minutes
  - FAIL 2 minutes

### Error 2025-10-22T08:40:04+00:00
```
2025-10-22T08:40:04.8887444Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-22T08:40:04.8890525Z     resource_test.go:30: Creating execution project: test-acc-tf-p-6362294035350851554
2025-10-22T08:40:04.8899766Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-22T08:40:04.8912598Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-22T08:40:04.8913180Z     resource_test.go:39: Step 1/3 error: Error running apply: exit status 1
2025-10-22T08:40:04.8913670Z         
2025-10-22T08:40:04.8915543Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f8956bab288813b27fd030/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-22T08:40:04.8916752Z         
2025-10-22T08:40:04.8917108Z           with mongodbatlas_network_peering.test,
2025-10-22T08:40:04.8917870Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-22T08:40:04.8918503Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-22T08:40:04.8918834Z         
2025-10-22T08:40:04.8961932Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (125.16s)
```
