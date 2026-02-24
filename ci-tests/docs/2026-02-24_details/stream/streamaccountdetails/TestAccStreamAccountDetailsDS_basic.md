# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 01:20](#error-2026-01-31t0120130000) |  | dev | flaky_client | 2677.03s
[2026-02-02 03:39](#error-2026-02-02t0339100000) |  | dev | timeout | 10809.03s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dd1b2/clusters | dev | out_of_capacity | 8.06s
[2026-02-03 01:50](#error-2026-02-03t0150010000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6981543f8303bfa55c8211b6/clusters | dev | out_of_capacity | 10.03s
[2026-02-12 18:47](#error-2026-02-12t1847080000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27 PASS 15 minutes
- 2026-01-28 PASS 16 minutes
- 2026-01-29 PASS 18 minutes
- 2026-01-30: MISSING
- 2026-01-31

### Error 2026-01-31T01:20:13+00:00
```
2026-01-31T01:20:13.7925066Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-01-31T01:20:13.7926048Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-2840157843117985505
2026-01-31T01:20:13.7927024Z === CONT  TestAccStreamAccountDetailsDS_basic
2026-01-31T01:20:13.7928038Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:13.284672976Z, ProjectID: 697d4e397d00588dcf9e91c4, Cluster name: test-acc-tf-c-1062696850688332372
2026-01-31T01:20:13.7941339Z    test_step_number=1 test_name=TestAccStreamAccountDetailsDS_basic test_terraform_path=/home/runner/work/_temp/2bf0b628-e5c4-41ae-b0dc-1406be3d5d35/terraform
2026-01-31T01:20:13.7942507Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2026-01-31T01:20:13.7943244Z         
2026-01-31T01:20:13.7943538Z         Error: Error in create
2026-01-31T01:20:13.7943826Z         
2026-01-31T01:20:13.7944215Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T01:20:13.7944983Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T01:20:13.7945695Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T01:20:13.7946068Z         
2026-01-31T01:20:13.7946576Z         cluster=test-acc-tf-c-1062696850688332372 didn't reach desired state: IDLE,
2026-01-31T01:20:13.7947027Z         error: Get
2026-01-31T01:20:13.7947784Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e397d00588dcf9e91c4/clusters/test-acc-tf-c-1062696850688332372":
2026-01-31T01:20:13.7948558Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-01-31T01:20:13.7948989Z --- FAIL: TestAccStreamAccountDetailsDS_basic (2677.27s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:10+00:00
```
2026-02-02T03:39:10.8443499Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-02-02T03:39:10.8445518Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-4853355381718082966
2026-02-02T03:39:10.8446535Z === CONT  TestAccStreamAccountDetailsDS_basic
2026-02-02T03:39:10.8447559Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:38.585977348Z, ProjectID: 697ff20671768356d7f7e10a, Cluster name: test-acc-tf-c-2019553492622327199
2026-02-02T03:39:10.8457567Z    test_name=TestAccStreamAccountDetailsDS_basic test_terraform_path=/home/runner/work/_temp/c8f5339e-db9e-46c9-9e5f-28b5c69d2264/terraform test_working_directory=/tmp/plugintest3210559600
2026-02-02T03:39:10.8458485Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:39:10.8458863Z         
2026-02-02T03:39:10.8459116Z         Error: Error in create
2026-02-02T03:39:10.8459369Z         
2026-02-02T03:39:10.8459715Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:39:10.8460386Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:39:10.8461324Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:39:10.8461665Z         
2026-02-02T03:39:10.8462096Z         cluster=test-acc-tf-c-2019553492622327199 didn't reach desired state: IDLE,
2026-02-02T03:39:10.8462559Z         error: context deadline exceeded
2026-02-02T03:39:10.8462915Z --- FAIL: TestAccStreamAccountDetailsDS_basic (10809.27s)
```

- 2026-02-03
  - FAIL 8 seconds

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.4398371Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-02-03T00:39:26.4399470Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-6604906116122946907
2026-02-03T00:39:26.4400824Z === CONT  TestAccStreamAccountDetailsDS_basic
2026-02-03T00:39:26.4402260Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:24.315075663Z, ProjectID: 698143b5e3c7fce2317dd1b2, Cluster name: test-acc-tf-c-171545274678039425
2026-02-03T00:39:26.4422840Z    test_name=TestAccStreamAccountDetailsDS_basic test_terraform_path=/home/runner/work/_temp/34604c70-dbc6-453a-adf0-ca9d2ff3c00b/terraform test_working_directory=/tmp/plugintest4235336772 test_step_number=1
2026-02-03T00:39:26.4425107Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:39:26.4425746Z         
2026-02-03T00:39:26.4426162Z         Error: Error in create
2026-02-03T00:39:26.4426570Z         
2026-02-03T00:39:26.4427175Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:26.4428384Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:26.4429526Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:26.4430100Z         
2026-02-03T00:39:26.4430776Z         cluster name: test-acc-tf-c-171545274678039425, API error details:
2026-02-03T00:39:26.4431901Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dd1b2/clusters
2026-02-03T00:39:26.4433063Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:26.4434376Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:26.4435384Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:26.4435967Z --- FAIL: TestAccStreamAccountDetailsDS_basic (8.57s)
```

  - FAIL 10 seconds

### Error 2026-02-03T01:50:01+00:00
```
2026-02-03T01:50:01.6060240Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-02-03T01:50:01.6066179Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-2108548899220153723
2026-02-03T01:50:01.6068508Z === CONT  TestAccStreamAccountDetailsDS_basic
2026-02-03T01:50:01.6083918Z     pre_check.go:46: Time before creating cluster: 2026-02-03T01:49:59.17616285Z, ProjectID: 6981543f8303bfa55c8211b6, Cluster name: test-acc-tf-c-2668350716457633387
2026-02-03T01:50:01.6106317Z   
2026-02-03T01:50:01.6106980Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2026-02-03T01:50:01.6107646Z         
2026-02-03T01:50:01.6108047Z         Error: Error in create
2026-02-03T01:50:01.6108465Z         
2026-02-03T01:50:01.6109065Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T01:50:01.6110249Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T01:50:01.6111748Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T01:50:01.6112315Z         
2026-02-03T01:50:01.6113050Z         cluster name: test-acc-tf-c-2668350716457633387, API error details:
2026-02-03T01:50:01.6114153Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981543f8303bfa55c8211b6/clusters
2026-02-03T01:50:01.6115302Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T01:50:01.6116608Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T01:50:01.6117442Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T01:50:01.6118013Z --- FAIL: TestAccStreamAccountDetailsDS_basic (10.29s)
```

- 2026-02-04 PASS 19 minutes
- 2026-02-05 PASS 17 minutes
- 2026-02-06 PASS 15 minutes
- 2026-02-07
  - PASS 17 minutes
  - PASS 14 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 15 minutes
- 2026-02-11 PASS 14 minutes
- 2026-02-12
  - PASS 20 minutes
  - FAIL a moment

### Error 2026-02-12T18:47:08+00:00
```
2026-02-12T18:47:08.8416948Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-02-12T18:47:08.8418558Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-2945424815580761532
2026-02-12T18:47:08.8421862Z     data_source_test.go:19: 
2026-02-12T18:47:08.8423551Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:08.8426658Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:08.8430063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:08.8433297Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-12T18:47:08.8436799Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamaccountdetails/data_source_test.go:19
2026-02-12T18:47:08.8439362Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:08.8440314Z         	Error:      	Received unexpected error:
2026-02-12T18:47:08.8445402Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:08.8453435Z         	Test:       	TestAccStreamAccountDetailsDS_basic
2026-02-12T18:47:08.8459247Z         	Messages:   	Project creation failed: test-acc-tf-p-2945424815580761532, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:08.8462102Z --- FAIL: TestAccStreamAccountDetailsDS_basic (0.66s)
```

- 2026-02-13 PASS 19 minutes
- 2026-02-14 PASS 15 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 17 minutes
- 2026-02-17 PASS 16 minutes
- 2026-02-18 PASS 19 minutes
- 2026-02-19 PASS 23 minutes
- 2026-02-20 PASS 19 minutes
- 2026-02-21 PASS 16 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24 PASS 18 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 14 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 14 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 16 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 15 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
