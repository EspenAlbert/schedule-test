# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 43 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, FAIL(x 23) PASS(x 20)
Success rate: 46.51%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
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
[2025-10-26 00:42](#error-2025-10-26t0042130000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68fd6b76328f9755b2ce8106/peers | qa |  | 126.09s
[2025-11-02 00:41](#error-2025-11-02t0041460000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/6906a5e27d8b3f733a091bb2/peers | qa |  | 124.10s
[2025-11-07 00:40](#error-2025-11-07t0040370000) |  | dev |  | 495.03s
[2025-11-09 00:42](#error-2025-11-09t0042080000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/690fe078640f4b0e4d077951/peers | qa | flaky_500 | 124.03s

## Timeline
- 2025-10-03: MISSING
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
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-10-20T00:42:48.442000+00:00-TestAccNetworkRSNetworkPeering_Azure',confidence=1.0,ts_when='23 days ago')

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

- 2025-10-23 PASS 4 minutes
- 2025-10-24 PASS 5 minutes
- 2025-10-25 PASS 4 minutes
- 2025-10-26

### Error 2025-10-26T00:42:13+00:00
```
2025-10-26T00:42:13.8212189Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-10-26T00:42:13.8212914Z     resource_test.go:30: Creating execution project: test-acc-tf-p-229851501758316782
2025-10-26T00:42:13.8220787Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-10-26T00:42:13.8235658Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-10-26T00:42:13.8236308Z     resource_test.go:39: Step 1/3 error: Error running apply: exit status 1
2025-10-26T00:42:13.8236709Z         
2025-10-26T00:42:13.8238662Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b76328f9755b2ce8106/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-26T00:42:13.8240117Z         
2025-10-26T00:42:13.8240471Z           with mongodbatlas_network_peering.test,
2025-10-26T00:42:13.8241139Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-26T00:42:13.8241867Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-10-26T00:42:13.8242210Z         
2025-10-26T00:42:13.8281762Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (126.90s)
```

- 2025-10-27 PASS 4 minutes
- 2025-10-28 PASS 4 minutes
- 2025-10-29 PASS 4 minutes
- 2025-10-30 PASS 4 minutes
- 2025-10-31 PASS 4 minutes
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:41:46+00:00
```
2025-11-02T00:41:46.0807763Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-11-02T00:41:46.0808406Z     resource_test.go:31: Creating execution project: test-acc-tf-p-5549952542089013314
2025-11-02T00:41:46.0813742Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-11-02T00:41:46.0827543Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-11-02T00:41:46.0828067Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-11-02T00:41:46.0828452Z         
2025-11-02T00:41:46.0830382Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5e27d8b3f733a091bb2/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-11-02T00:41:46.0831563Z         
2025-11-02T00:41:46.0831901Z           with mongodbatlas_network_peering.test,
2025-11-02T00:41:46.0832556Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-11-02T00:41:46.0833278Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-11-02T00:41:46.0833693Z         
2025-11-02T00:41:46.0875052Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (124.96s)
```

- 2025-11-03 PASS 5 minutes
- 2025-11-04 PASS 5 minutes
- 2025-11-05
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-11-06 PASS 4 minutes
- 2025-11-07

### Error 2025-11-07T00:40:37+00:00
```
2025-11-07T00:40:37.8195642Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-11-07T00:40:37.8196565Z     resource_test.go:31: Creating execution project: test-acc-tf-p-1766206174823045643
2025-11-07T00:40:37.8204221Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-11-07T00:40:37.8231382Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-11-07T00:40:37.8231905Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-11-07T00:40:37.8232412Z         
2025-11-07T00:40:37.8232799Z         Error: peer networking is in a failed state: RETRYABLE
2025-11-07T00:40:37.8233306Z         
2025-11-07T00:40:37.8233675Z           with mongodbatlas_network_peering.test,
2025-11-07T00:40:37.8234341Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-11-07T00:40:37.8234952Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-11-07T00:40:37.8235280Z         
2025-11-07T00:40:37.8235581Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (495.30s)
```

- 2025-11-08 PASS 5 minutes
- 2025-11-09

### Error 2025-11-09T00:42:08+00:00
```
2025-11-09T00:42:08.0243196Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-11-09T00:42:08.0243766Z     resource_test.go:31: Creating execution project: test-acc-tf-p-4430574270234060132
2025-11-09T00:42:08.0250041Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-11-09T00:42:08.0262361Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-11-09T00:42:08.0262875Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-11-09T00:42:08.0263262Z         
2025-11-09T00:42:08.0264954Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/690fe078640f4b0e4d077951/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-11-09T00:42:08.0266118Z         
2025-11-09T00:42:08.0266467Z           with mongodbatlas_network_peering.test,
2025-11-09T00:42:08.0267125Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-11-09T00:42:08.0267731Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-11-09T00:42:08.0268055Z         
2025-11-09T00:42:08.0308748Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (124.32s)
```

- 2025-11-10 PASS 4 minutes
- 2025-11-11 PASS 4 minutes
- 2025-11-12 PASS 4 minutes