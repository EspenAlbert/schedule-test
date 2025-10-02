# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 12)
Success rate: 72.09%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-04 00:38](#error-2025-09-04t0038370000) |  | dev | 509.04s
[2025-09-30 07:54](#error-2025-09-30t0754340000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68db89c1bb7b8c0d703483ec/peers | qa | 125.09s
[2025-09-30 15:19](#error-2025-09-30t1519070000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68dbf1f2ce185e38b70f0148/peers | qa | 125.08s
[2025-10-01 00:40](#error-2025-10-01t0040370000) |  | dev | 239.07s
[2025-10-01 03:34](#error-2025-10-01t0334370000) |  | dev | 253.09s
[2025-10-01 05:07](#error-2025-10-01t0507160000) |  | dev | 259.03s
[2025-10-01 08:22](#error-2025-10-01t0822380000) |  | dev | 255.02s
[2025-10-01 09:21](#error-2025-10-01t0921540000) |  | dev | 248.09s
[2025-10-01 10:53](#error-2025-10-01t1053080000) |  | dev | 247.08s
[2025-10-01 12:00](#error-2025-10-01t1200480000) |  | dev | 239.07s
[2025-10-01 14:27](#error-2025-10-01t1427050000) |  | dev | 256.03s
[2025-10-02 01:28](#error-2025-10-02t0128350000) |  | dev | 255.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 5 minutes
- 2025-09-04

### Error 2025-09-04T00:38:37+00:00
```
2025-09-04T00:38:37.2527147Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-09-04T00:38:37.2527931Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-3760082049599603768
2025-09-04T00:38:37.2534274Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-09-04T00:38:37.2551234Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-09-04T00:38:37.2551935Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-09-04T00:38:37.2552401Z         
2025-09-04T00:38:37.2552802Z         Error: peer networking is in a failed state: RETRYABLE
2025-09-04T00:38:37.2553146Z         
2025-09-04T00:38:37.2553512Z           with mongodbatlas_network_peering.test,
2025-09-04T00:38:37.2554316Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-09-04T00:38:37.2554946Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-09-04T00:38:37.2555288Z         
2025-09-04T00:38:37.2555589Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (509.38s)
```

- 2025-09-05 PASS 4 minutes
- 2025-09-06 PASS 5 minutes
- 2025-09-07 PASS 5 minutes
- 2025-09-08
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 4 minutes
- 2025-09-09 PASS 5 minutes
- 2025-09-10 PASS 4 minutes
- 2025-09-11 PASS 5 minutes
- 2025-09-12 PASS 4 minutes
- 2025-09-13 PASS 5 minutes
- 2025-09-14 PASS 4 minutes
- 2025-09-15
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-09-16 PASS 4 minutes
- 2025-09-17 PASS 4 minutes
- 2025-09-18 PASS 4 minutes
- 2025-09-19 PASS 4 minutes
- 2025-09-20 PASS 4 minutes
- 2025-09-21 PASS 4 minutes
- 2025-09-22 PASS 4 minutes
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
