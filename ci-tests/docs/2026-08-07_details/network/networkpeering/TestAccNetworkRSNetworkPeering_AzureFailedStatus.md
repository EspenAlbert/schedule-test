# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s
[2026-07-11 00:53](#error-2026-07-11t0053200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 106.00s
[2026-07-14 00:49](#error-2026-07-14t0049230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 227.07s
[2026-07-16 00:52](#error-2026-07-16t0052260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.01s
[2026-07-18 00:49](#error-2026-07-18t0049410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 111.05s
[2026-07-21 00:51](#error-2026-07-21t0051260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.07s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1424446Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-07-09T00:58:29.1448492Z   
2026-07-09T00:58:29.1449308Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-09T00:58:29.1449895Z         
2026-07-09T00:58:29.1450367Z         Error: error creating project: test-acc-tf-p-663917414248173288
2026-07-09T00:58:29.1450778Z         
2026-07-09T00:58:29.1451128Z           with mongodbatlas_project.first,
2026-07-09T00:58:29.1451806Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-07-09T00:58:29.1452457Z           13: 		resource "mongodbatlas_project" "first" {
2026-07-09T00:58:29.1452812Z         
2026-07-09T00:58:29.1453341Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:29.1454058Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:29.1454707Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1455107Z         
2026-07-09T00:58:29.1455563Z         Error: error creating project: test-acc-tf-p-3506878889424719640
2026-07-09T00:58:29.1456121Z         
2026-07-09T00:58:29.1456470Z           with mongodbatlas_project.second,
2026-07-09T00:58:29.1457159Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-07-09T00:58:29.1457803Z           36: 		resource "mongodbatlas_project" "second" {
2026-07-09T00:58:29.1458157Z         
2026-07-09T00:58:29.1458815Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:29.1459734Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:29.1460384Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1460912Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (67.11s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T00:53:20+00:00
```
2026-07-11T00:53:20.3242762Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-07-11T00:53:20.3265413Z    test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/825b680f-ed8c-44f0-9373-12d14ef8b97f/terraform
2026-07-11T00:53:20.3266563Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-11T00:53:20.3267145Z         
2026-07-11T00:53:20.3267651Z         Error: error creating project: test-acc-tf-p-3258884431876567188
2026-07-11T00:53:20.3268093Z         
2026-07-11T00:53:20.3268471Z           with mongodbatlas_project.first,
2026-07-11T00:53:20.3269190Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-07-11T00:53:20.3269873Z           13: 		resource "mongodbatlas_project" "first" {
2026-07-11T00:53:20.3270467Z         
2026-07-11T00:53:20.3271335Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:53:20.3272278Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:53:20.3272972Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:53:20.3273399Z         
2026-07-11T00:53:20.3273903Z         Error: error creating project: test-acc-tf-p-3663006558059122508
2026-07-11T00:53:20.3274342Z         
2026-07-11T00:53:20.3274727Z           with mongodbatlas_project.second,
2026-07-11T00:53:20.3275458Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-07-11T00:53:20.3276148Z           36: 		resource "mongodbatlas_project" "second" {
2026-07-11T00:53:20.3276528Z         
2026-07-11T00:53:20.3277083Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:53:20.3277956Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:53:20.3278656Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:53:20.3279227Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (106.03s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 3 minutes
- 2026-07-14

### Error 2026-07-14T00:49:23+00:00
```
2026-07-14T00:49:23.6191569Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-07-14T00:49:23.6205137Z    test_working_directory=/tmp/plugintest1364653569 test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/8245479f-6b8a-426f-8813-c119934d1018/terraform test_step_number=1
2026-07-14T00:49:23.6206663Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-14T00:49:23.6207307Z         
2026-07-14T00:49:23.6207873Z         Error: error creating project: test-acc-tf-p-1507962609558270973
2026-07-14T00:49:23.6208360Z         
2026-07-14T00:49:23.6209078Z           with mongodbatlas_project.second,
2026-07-14T00:49:23.6209899Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-07-14T00:49:23.6210838Z           36: 		resource "mongodbatlas_project" "second" {
2026-07-14T00:49:23.6211269Z         
2026-07-14T00:49:23.6211899Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:49:23.6212744Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:49:23.6213507Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:49:23.6214133Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (227.74s)
```

- 2026-07-15 PASS 8 minutes
- 2026-07-16

### Error 2026-07-16T00:52:26+00:00
```
2026-07-16T00:52:26.3122668Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-07-16T00:52:26.3144900Z    test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/b0e99a7f-fae1-4889-9bda-32e9aba6e3c1/terraform test_working_directory=/tmp/plugintest3915973177 test_step_number=1
2026-07-16T00:52:26.3146295Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-16T00:52:26.3146861Z         
2026-07-16T00:52:26.3147595Z         Error: error creating project: test-acc-tf-p-6582196447274593087
2026-07-16T00:52:26.3148272Z         
2026-07-16T00:52:26.3148634Z           with mongodbatlas_project.first,
2026-07-16T00:52:26.3149327Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-07-16T00:52:26.3149978Z           13: 		resource "mongodbatlas_project" "first" {
2026-07-16T00:52:26.3150333Z         
2026-07-16T00:52:26.3150862Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:52:26.3151580Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:52:26.3152512Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:52:26.3152921Z         
2026-07-16T00:52:26.3153396Z         Error: error creating project: test-acc-tf-p-3354869886602362911
2026-07-16T00:52:26.3153803Z         
2026-07-16T00:52:26.3154159Z           with mongodbatlas_project.second,
2026-07-16T00:52:26.3154862Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-07-16T00:52:26.3155513Z           36: 		resource "mongodbatlas_project" "second" {
2026-07-16T00:52:26.3155869Z         
2026-07-16T00:52:26.3156392Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:52:26.3157499Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:52:26.3158216Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:52:26.3158758Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (66.11s)
```

- 2026-07-17 PASS 3 minutes
- 2026-07-18

### Error 2026-07-18T00:49:41+00:00
```
2026-07-18T00:49:41.0903731Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-07-18T00:49:41.0923454Z    test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/31368b9f-a368-4317-8f01-55b96f4cb3ea/terraform
2026-07-18T00:49:41.0924425Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-18T00:49:41.0925006Z         
2026-07-18T00:49:41.0925468Z         Error: error creating project: test-acc-tf-p-119618953552060734
2026-07-18T00:49:41.0925864Z         
2026-07-18T00:49:41.0926235Z           with mongodbatlas_project.first,
2026-07-18T00:49:41.0926857Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-07-18T00:49:41.0927468Z           13: 		resource "mongodbatlas_project" "first" {
2026-07-18T00:49:41.0927828Z         
2026-07-18T00:49:41.0928336Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:41.0928994Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:41.0929594Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:41.0929990Z         
2026-07-18T00:49:41.0930431Z         Error: error creating project: test-acc-tf-p-2628544959854267
2026-07-18T00:49:41.0930809Z         
2026-07-18T00:49:41.0931181Z           with mongodbatlas_project.second,
2026-07-18T00:49:41.0931958Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-07-18T00:49:41.0932564Z           36: 		resource "mongodbatlas_project" "second" {
2026-07-18T00:49:41.0932914Z         
2026-07-18T00:49:41.0933497Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:41.0934153Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:41.0934740Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:41.0935241Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (111.48s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:26+00:00
```
2026-07-21T00:51:26.4910928Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-07-21T00:51:26.4932836Z    test_working_directory=/tmp/plugintest4233655634 test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_step_number=1
2026-07-21T00:51:26.4952328Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-21T00:51:26.4953024Z         
2026-07-21T00:51:26.4953817Z         Error: error creating project: test-acc-tf-p-3278257789838254332
2026-07-21T00:51:26.4954267Z         
2026-07-21T00:51:26.4954639Z           with mongodbatlas_project.first,
2026-07-21T00:51:26.4955531Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-07-21T00:51:26.4956215Z           13: 		resource "mongodbatlas_project" "first" {
2026-07-21T00:51:26.4956592Z         
2026-07-21T00:51:26.4957139Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:51:26.4957865Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:51:26.4958526Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4958933Z         
2026-07-21T00:51:26.4959408Z         Error: error creating project: test-acc-tf-p-7021395287721654627
2026-07-21T00:51:26.4959821Z         
2026-07-21T00:51:26.4960184Z           with mongodbatlas_project.second,
2026-07-21T00:51:26.4960896Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-07-21T00:51:26.4961562Z           36: 		resource "mongodbatlas_project" "second" {
2026-07-21T00:51:26.4961925Z         
2026-07-21T00:51:26.4962467Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:51:26.4963407Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:51:26.4964086Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4964628Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (101.69s)
```

- 2026-07-22 PASS 8 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2135602Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-07-23T00:53:54.2182017Z    test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/732aa030-20fb-4fa8-a3ef-331987fe128f/terraform test_working_directory=/tmp/plugintest828375236
2026-07-23T00:53:54.2184244Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-23T00:53:54.2185313Z         
2026-07-23T00:53:54.2186118Z         Error: error creating project: test-acc-tf-p-4722522398952032270
2026-07-23T00:53:54.2186808Z         
2026-07-23T00:53:54.2187396Z           with mongodbatlas_project.first,
2026-07-23T00:53:54.2188543Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-07-23T00:53:54.2189633Z           13: 		resource "mongodbatlas_project" "first" {
2026-07-23T00:53:54.2190232Z         
2026-07-23T00:53:54.2191133Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:53:54.2192379Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:53:54.2193786Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:53:54.2195128Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:53:54.2195938Z         BadRequestDetail: 
2026-07-23T00:53:54.2196415Z         
2026-07-23T00:53:54.2197203Z         Error: error creating project: test-acc-tf-p-2981471294005889594
2026-07-23T00:53:54.2197891Z         
2026-07-23T00:53:54.2198483Z           with mongodbatlas_project.second,
2026-07-23T00:53:54.2199653Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-07-23T00:53:54.2200757Z           36: 		resource "mongodbatlas_project" "second" {
2026-07-23T00:53:54.2201347Z         
2026-07-23T00:53:54.2202273Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:53:54.2203515Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:53:54.2204869Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:53:54.2205927Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:53:54.2206440Z         BadRequestDetail: 
2026-07-23T00:53:54.2206896Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (1.61s)
```

- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 8 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 5 minutes
- 2026-08-01 PASS 3 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 4 minutes
- 2026-08-04 PASS 3 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 8 minutes
- 2026-08-07 PASS 8 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 8 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 8 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 minutes
  - PASS 3 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
