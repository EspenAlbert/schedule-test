# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 20) FAIL(x 13)
Success rate: 60.61%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028240000) |  | dev | timeout | 10803.05s
[2025-11-08 00:29](#error-2025-11-08t0029140000) |  | dev |  | 5900.01s
[2025-11-19 00:29](#error-2025-11-19t0029080000) |  | dev | timeout | 10804.08s
[2025-11-19 09:30](#error-2025-11-19t0930110000) |  | dev | timeout | 10804.04s
[2025-11-20 00:28](#error-2025-11-20t0028130000) |  | dev | timeout | 10803.04s
[2025-11-20 10:02](#error-2025-11-20t1002030000) |  | dev | timeout | 10804.03s
[2025-11-21 00:28](#error-2025-11-21t0028360000) |  | dev | timeout | 10804.03s
[2025-11-22 00:27](#error-2025-11-22t0027060000) |  | dev | timeout | 10803.05s
[2025-11-24 00:30](#error-2025-11-24t0030150000) |  | dev | timeout | 10804.06s
[2025-11-25 00:27](#error-2025-11-25t0027290000) |  | dev | timeout | 10803.06s
[2025-11-26 00:28](#error-2025-11-26t0028480000) |  | dev | timeout | 10804.04s
[2025-11-27 00:28](#error-2025-11-27t0028350000) |  | dev | timeout | 10803.06s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS an hour
- 2025-10-30

### Error 2025-10-30T00:28:24+00:00
```
2025-10-30T00:28:24.3482911Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-30T00:29:52.4637381Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-30T03:29:55.9180340Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-30T03:29:55.9181231Z     resource_test.go:1074: Step 1/4 error: Error running apply: exit status 1
2025-10-30T03:29:55.9182103Z         
2025-10-30T03:29:55.9182507Z         Error: Error in create
2025-10-30T03:29:55.9182892Z         
2025-10-30T03:29:55.9183236Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:29:55.9183880Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:29:55.9184463Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:29:55.9184892Z         
2025-10-30T03:29:55.9185347Z         cluster=test-acc-tf-c-7054213157015212896 didn't reach desired state: IDLE,
2025-10-30T03:29:55.9185803Z         error: context deadline exceeded
2025-10-30T03:29:55.9705283Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10803.51s)
```

- 2025-10-31 PASS an hour
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS an hour
- 2025-11-04 PASS 54 minutes
- 2025-11-05
  - PASS 51 minutes
  - PASS 52 minutes
- 2025-11-06 PASS an hour
- 2025-11-07 PASS 53 minutes
- 2025-11-08

### Error 2025-11-08T00:29:14+00:00
```
2025-11-08T00:29:14.9005116Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-08T00:31:08.7355727Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-08T02:06:26.0490818Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-08T02:06:26.0491357Z     resource_test.go:1074: Step 3/4 error: Error running apply: exit status 1
2025-11-08T02:06:26.0491944Z         
2025-11-08T02:06:26.0492326Z         Error: Provider produced inconsistent result after apply
2025-11-08T02:06:26.0492644Z         
2025-11-08T02:06:26.0493072Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-11-08T02:06:26.0493691Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-11-08T02:06:26.0494113Z         unexpected new value:
2025-11-08T02:06:26.0494632Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-11-08T02:06:26.0495146Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-11-08T02:06:26.0495445Z         
2025-11-08T02:06:26.0495882Z         This is a bug in the provider, which should be reported in the provider's own
2025-11-08T02:06:26.0496275Z         issue tracker.
2025-11-08T02:06:26.0496496Z         
2025-11-08T02:06:26.0496857Z         Error: Provider produced inconsistent result after apply
2025-11-08T02:06:26.0497432Z         
2025-11-08T02:06:26.0497880Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-11-08T02:06:26.0498497Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-11-08T02:06:26.0498922Z         unexpected new value:
2025-11-08T02:06:26.0499416Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-11-08T02:06:26.0499933Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-11-08T02:06:26.0500393Z         
2025-11-08T02:06:26.0500831Z         This is a bug in the provider, which should be reported in the provider's own
2025-11-08T02:06:26.0501227Z         issue tracker.
2025-11-08T02:09:28.8769641Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (5900.14s)
```

- 2025-11-09: MISSING
- 2025-11-10 PASS 55 minutes
- 2025-11-11 PASS 52 minutes
- 2025-11-12 PASS 52 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS an hour
- 2025-11-15 PASS 49 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 50 minutes
- 2025-11-18 PASS 50 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:08+00:00
```
2025-11-19T00:29:08.2371366Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-19T00:35:20.7768834Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-19T03:35:25.4954131Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-19T03:35:25.4954835Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-19T03:35:25.4955310Z         
2025-11-19T03:35:25.4955733Z         Error: Error in create
2025-11-19T03:35:25.4956229Z         
2025-11-19T03:35:25.4956655Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:25.4957506Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:25.4958205Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:25.4958508Z         
2025-11-19T03:35:25.4959067Z         cluster=test-acc-tf-c-8625012961212267102 didn't reach desired state: IDLE,
2025-11-19T03:35:25.4959586Z         error: context deadline exceeded
2025-11-19T03:35:25.5186713Z   
2025-11-19T03:35:25.5436052Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.78s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:11+00:00
```
2025-11-19T09:30:11.9346769Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-19T09:31:55.5690690Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-19T12:31:59.9248795Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-19T12:31:59.9249605Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-19T12:31:59.9250117Z         
2025-11-19T12:31:59.9250371Z         Error: Error in create
2025-11-19T12:31:59.9250613Z         
2025-11-19T12:31:59.9251040Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:31:59.9251774Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:31:59.9252444Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:31:59.9252778Z         
2025-11-19T12:31:59.9253476Z         cluster=test-acc-tf-c-7988451819525491801 didn't reach desired state: IDLE,
2025-11-19T12:31:59.9253950Z         error: context deadline exceeded
2025-11-19T12:31:59.9704893Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.41s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:13+00:00
```
2025-11-20T00:28:13.2152988Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-20T00:29:55.5957389Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-20T03:29:58.8888992Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-20T03:29:58.8889476Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-20T03:29:58.8889814Z         
2025-11-20T03:29:58.8890062Z         Error: Error in create
2025-11-20T03:29:58.8890299Z         
2025-11-20T03:29:58.8890607Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:29:58.8891179Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:29:58.8891719Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:29:58.8892016Z         
2025-11-20T03:29:58.8892423Z         cluster=test-acc-tf-c-8813046102827282965 didn't reach desired state: IDLE,
2025-11-20T03:29:58.8892845Z         error: context deadline exceeded
2025-11-20T03:29:58.9505294Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10803.37s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:02:03+00:00
```
2025-11-20T10:02:03.0588070Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-20T10:03:33.6716503Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-20T13:03:37.9442697Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-20T13:03:37.9443410Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-20T13:03:37.9443876Z         
2025-11-20T13:03:37.9444306Z         Error: Error in create
2025-11-20T13:03:37.9444563Z         
2025-11-20T13:03:37.9445002Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:37.9445746Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:37.9446398Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:37.9446765Z         
2025-11-20T13:03:37.9447276Z         cluster=test-acc-tf-c-15374526705500615 didn't reach desired state: IDLE,
2025-11-20T13:03:37.9447750Z         error: context deadline exceeded
2025-11-20T13:03:37.9919043Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.33s)
```

- 2025-11-21

### Error 2025-11-21T00:28:36+00:00
```
2025-11-21T00:28:36.0357820Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-21T00:30:22.6950175Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-21T03:30:26.9308125Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-21T03:30:26.9309111Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-21T03:30:26.9309775Z         
2025-11-21T03:30:26.9310212Z         Error: Error in create
2025-11-21T03:30:26.9310627Z         
2025-11-21T03:30:26.9311196Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:26.9312365Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:26.9313442Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:26.9313995Z         
2025-11-21T03:30:26.9314805Z         cluster=test-acc-tf-c-4840353746577728619 didn't reach desired state: IDLE,
2025-11-21T03:30:26.9315640Z         error: context deadline exceeded
2025-11-21T03:30:26.9773381Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.30s)
```

- 2025-11-22

### Error 2025-11-22T00:27:06+00:00
```
2025-11-22T00:27:06.7841826Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-22T00:28:42.9649376Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-22T03:28:46.4488806Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-22T03:28:46.4489726Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-22T03:28:46.4490390Z         
2025-11-22T03:28:46.4491090Z         Error: Error in create
2025-11-22T03:28:46.4491641Z         
2025-11-22T03:28:46.4491989Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:46.4492748Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:46.4493566Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:46.4494111Z         
2025-11-22T03:28:46.4494616Z         cluster=test-acc-tf-c-6407010844243216711 didn't reach desired state: IDLE,
2025-11-22T03:28:46.4495098Z         error: context deadline exceeded
2025-11-22T03:28:46.4907045Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10803.54s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:15+00:00
```
2025-11-24T00:30:15.9401483Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-24T00:33:24.1953128Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-24T03:33:28.7108903Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-24T03:33:28.7109859Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-24T03:33:28.7110518Z         
2025-11-24T03:33:28.7110939Z         Error: Error in create
2025-11-24T03:33:28.7111279Z         
2025-11-24T03:33:28.7111771Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:28.7112854Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:28.7113908Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:28.7114669Z         
2025-11-24T03:33:28.7115455Z         cluster=test-acc-tf-c-5513973218437351705 didn't reach desired state: IDLE,
2025-11-24T03:33:28.7116259Z         error: context deadline exceeded
2025-11-24T03:33:28.7650747Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.58s)
```

- 2025-11-25

### Error 2025-11-25T00:27:29+00:00
```
2025-11-25T00:27:29.0590185Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-25T00:31:51.4391104Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-25T03:31:54.9252557Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-25T03:31:54.9253242Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-25T03:31:54.9253776Z         
2025-11-25T03:31:54.9254031Z         Error: Error in create
2025-11-25T03:31:54.9254439Z         
2025-11-25T03:31:54.9254766Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:31:54.9255504Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:31:54.9256208Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:31:54.9256525Z         
2025-11-25T03:31:54.9257083Z         cluster=test-acc-tf-c-6447630939869110289 didn't reach desired state: IDLE,
2025-11-25T03:31:54.9257603Z         error: context deadline exceeded
2025-11-25T03:31:54.9664469Z   
2025-11-25T03:31:54.9707817Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10803.55s)
```

- 2025-11-26

### Error 2025-11-26T00:28:48+00:00
```
2025-11-26T00:28:48.1330371Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-26T00:30:27.5284426Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-26T03:30:31.8256285Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-26T03:30:31.8257000Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-26T03:30:31.8257511Z         
2025-11-26T03:30:31.8257765Z         Error: Error in create
2025-11-26T03:30:31.8258007Z         
2025-11-26T03:30:31.8258514Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:31.8259262Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:31.8259965Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:31.8260280Z         
2025-11-26T03:30:31.8260813Z         cluster=test-acc-tf-c-883282728179993607 didn't reach desired state: IDLE,
2025-11-26T03:30:31.8261291Z         error: context deadline exceeded
2025-11-26T03:30:31.8725306Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.36s)
```

- 2025-11-27

### Error 2025-11-27T00:28:35+00:00
```
2025-11-27T00:28:35.2679030Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-27T00:30:06.5269450Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-27T03:30:10.0751379Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-27T03:30:10.0751959Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2025-11-27T03:30:10.0752343Z         
2025-11-27T03:30:10.0752596Z         Error: Error in create
2025-11-27T03:30:10.0752861Z         
2025-11-27T03:30:10.0753181Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:10.0753825Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:10.0754425Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:10.0754792Z         
2025-11-27T03:30:10.0755300Z         cluster=test-acc-tf-c-6634374190177091310 didn't reach desired state: IDLE,
2025-11-27T03:30:10.0755866Z         error: context deadline exceeded
2025-11-27T03:30:10.1217945Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10803.60s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029520000) |  | qa | 5.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:52+00:00
```
2025-11-02T00:29:52.3261762Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-02T00:31:20.6061445Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-02T00:31:25.4356676Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-02T00:31:25.4357818Z     resource_test.go:1074: Step 1/4 error: Error running apply: exit status 1
2025-11-02T00:31:25.4358430Z         
2025-11-02T00:31:25.4358838Z         Error: Error in create
2025-11-02T00:31:25.4359226Z         
2025-11-02T00:31:25.4359760Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.4360851Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.4361855Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.4362371Z         
2025-11-02T00:31:25.4363053Z         cluster name: test-acc-tf-c-8611415866401370438, API error details:
2025-11-02T00:31:25.4364179Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fd5ace12378d2962e9/clusters
2025-11-02T00:31:25.4365038Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.4366074Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.4367079Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.4369086Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.4372599Z         BadRequestDetail: 
2025-11-02T00:31:25.4869153Z   
2025-11-02T00:31:25.7222559Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (5.13s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 52 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 50 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 48 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 49 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
