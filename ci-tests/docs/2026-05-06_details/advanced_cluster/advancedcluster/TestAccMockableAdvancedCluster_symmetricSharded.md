# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047080000) |  | dev | timeout | 14209.04s
[2026-04-08 00:45](#error-2026-04-08t0045230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d5a52074e39a66414a5445/clusters | dev | out_of_capacity | 6.06s
[2026-04-09 00:43](#error-2026-04-09t0043330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d6f6329bb208aac607e22f/clusters | dev | out_of_capacity | 5.08s
[2026-04-10 00:44](#error-2026-04-10t0044350000) |  | dev |  | 5143.06s
[2026-04-11 00:48](#error-2026-04-11t0048220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d99a5292f7ea8dceedaa50/clusters | dev | out_of_capacity | 5.09s
[2026-04-13 00:49](#error-2026-04-13t0049120000) |  | dev |  | 4753.04s
[2026-04-14 00:52](#error-2026-04-14t0052130000) |  | dev |  | 4321.01s
[2026-04-15 00:49](#error-2026-04-15t0049260000) |  | dev |  | 4608.01s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032ee81002038a8a0f411/clusters | dev | out_of_capacity | 5.09s
[2026-04-24 00:51](#error-2026-04-24t0051340000) |  | dev | timeout | 10807.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:08+00:00
```
2026-04-07T00:47:08.2144813Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-07T00:47:08.2806987Z     resource_test.go:629: Adding variable groupId=69d45406c0b364eb740f43a1
2026-04-07T00:47:08.2807684Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-3849490413407225310
2026-04-07T00:48:53.7995171Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-07T01:11:13.1206303Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-07T01:11:13.1207969Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6173851617950849164
2026-04-07T01:11:13.5335838Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6907004249865256405
2026-04-07T01:11:13.9195907Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-1064912034493420909
2026-04-07T01:45:42.3238114Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-07T01:45:42.3238771Z     resource_test.go:629: Step 2/3 error: Error running apply: exit status 1
2026-04-07T01:45:42.3239494Z         
2026-04-07T01:45:42.3239964Z         Error: Provider produced inconsistent result after apply
2026-04-07T01:45:42.3240307Z         
2026-04-07T01:45:42.3240754Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2026-04-07T01:45:42.3241400Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-04-07T01:45:42.3242042Z         unexpected new value: .config_server_type: was cty.StringVal("DEDICATED"),
2026-04-07T01:45:42.3242510Z         but now cty.StringVal("EMBEDDED").
2026-04-07T01:45:42.3243044Z         
2026-04-07T01:45:42.3243786Z         This is a bug in the provider, which should be reported in the provider's own
2026-04-07T01:45:42.3244212Z         issue tracker.
2026-04-07T04:45:43.0780075Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-07T04:45:43.0781273Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:45:43.0781901Z         
2026-04-07T04:45:43.0782178Z         Error: Error in delete
2026-04-07T04:45:43.0782428Z         
2026-04-07T04:45:43.0782867Z         cluster=test-acc-tf-c-3849490413407225310 didn't reach desired state:
2026-04-07T04:45:43.0783641Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:45:43.0784231Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:45:43.1121614Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (14209.38s)
```

- 2026-04-08

### Error 2026-04-08T00:45:23+00:00
```
2026-04-08T00:45:23.3148865Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-08T00:45:23.3791142Z     resource_test.go:629: Adding variable groupId=69d5a52074e39a66414a5445
2026-04-08T00:45:23.3792394Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-1092912199444085816
2026-04-08T00:46:47.8912908Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-08T00:46:53.6196596Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-08T00:46:53.6197701Z     resource_test.go:629: Step 1/3 error: Error running apply: exit status 1
2026-04-08T00:46:53.6198485Z         
2026-04-08T00:46:53.6198994Z         Error: Error in create
2026-04-08T00:46:53.6199513Z         
2026-04-08T00:46:53.6200186Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T00:46:53.6201271Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T00:46:53.6202508Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T00:46:53.6204760Z         
2026-04-08T00:46:53.6206023Z         cluster name: test-acc-tf-c-1092912199444085816, API error details:
2026-04-08T00:46:53.6208182Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a52074e39a66414a5445/clusters
2026-04-08T00:46:53.6209642Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-08T00:46:53.6210968Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-08T00:46:53.6212088Z         Conflict. Params: [], BadRequestDetail: 
2026-04-08T00:46:53.7250202Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (6.60s)
```

- 2026-04-09

### Error 2026-04-09T00:43:33+00:00
```
2026-04-09T00:43:33.2114888Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-09T00:43:33.2782919Z     resource_test.go:629: Adding variable groupId=69d6f6329bb208aac607e22f
2026-04-09T00:43:33.2783816Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-3462721710280842697
2026-04-09T00:48:13.4989826Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-09T00:48:18.8972399Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-09T00:48:18.8973370Z     resource_test.go:629: Step 1/3 error: Error running apply: exit status 1
2026-04-09T00:48:18.8974049Z         
2026-04-09T00:48:18.8974491Z         Error: Error in create
2026-04-09T00:48:18.8974922Z         
2026-04-09T00:48:18.8975887Z           with mongodbatlas_advanced_cluster.test,
2026-04-09T00:48:18.8977395Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-09T00:48:18.8978746Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-09T00:48:18.8979449Z         
2026-04-09T00:48:18.8980332Z         cluster name: test-acc-tf-c-3462721710280842697, API error details:
2026-04-09T00:48:18.8981793Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f6329bb208aac607e22f/clusters
2026-04-09T00:48:18.8983299Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-09T00:48:18.8984637Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-09T00:48:18.8985956Z         Conflict. Params: [], BadRequestDetail: 
2026-04-09T00:48:18.9556505Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5.85s)
```

- 2026-04-10

### Error 2026-04-10T00:44:35+00:00
```
2026-04-10T00:44:35.9415717Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-10T00:44:36.0114157Z     resource_test.go:629: Adding variable groupId=69d847f1399332cee384f0ca
2026-04-10T00:44:36.0114942Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-6632350800695045669
2026-04-10T00:46:02.6560275Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-10T01:09:17.1684982Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-10T01:09:17.1686021Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2223717784687459307
2026-04-10T01:09:17.8293178Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1924775350569193297
2026-04-10T01:09:18.0865653Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2883250365640057735
2026-04-10T02:07:42.9494018Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-10T02:07:42.9495220Z     resource_test.go:629: Step 2/3 error: Error running apply: exit status 1
2026-04-10T02:07:42.9495805Z         
2026-04-10T02:07:42.9496395Z         Error: Provider produced inconsistent result after apply
2026-04-10T02:07:42.9496904Z         
2026-04-10T02:07:42.9497576Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2026-04-10T02:07:42.9498752Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-04-10T02:07:42.9499776Z         unexpected new value: .config_server_type: was cty.StringVal("DEDICATED"),
2026-04-10T02:07:42.9500503Z         but now cty.StringVal("EMBEDDED").
2026-04-10T02:07:42.9500914Z         
2026-04-10T02:07:42.9501623Z         This is a bug in the provider, which should be reported in the provider's own
2026-04-10T02:07:42.9502298Z         issue tracker.
2026-04-10T02:11:45.7508183Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5143.59s)
```

- 2026-04-11

### Error 2026-04-11T00:48:22+00:00
```
2026-04-11T00:48:22.6930827Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-11T00:48:22.7612972Z     resource_test.go:629: Adding variable groupId=69d99a5292f7ea8dceedaa50
2026-04-11T00:48:22.7613864Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-7268111259698814912
2026-04-11T00:49:46.1293190Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-11T00:49:51.2750546Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-11T00:49:51.2751695Z     resource_test.go:629: Step 1/3 error: Error running apply: exit status 1
2026-04-11T00:49:51.2752345Z         
2026-04-11T00:49:51.2752810Z         Error: Error in create
2026-04-11T00:49:51.2753283Z         
2026-04-11T00:49:51.2753932Z           with mongodbatlas_advanced_cluster.test,
2026-04-11T00:49:51.2755286Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-11T00:49:51.2756535Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-11T00:49:51.2757147Z         
2026-04-11T00:49:51.2757961Z         cluster name: test-acc-tf-c-7268111259698814912, API error details:
2026-04-11T00:49:51.2759326Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d99a5292f7ea8dceedaa50/clusters
2026-04-11T00:49:51.2760684Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-11T00:49:51.2762555Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-11T00:49:51.2763614Z         Conflict. Params: [], BadRequestDetail: 
2026-04-11T00:49:51.3035999Z    test_name=TestAccClusterAdvancedCluster_singleShardedMultiCloud test_terraform_path=/home/runner/work/_temp/f08d9e75-8cb2-427a-a657-c5458f3ea8e2/terraform
2026-04-11T00:49:51.3558773Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5.91s)
```

- 2026-04-12: MISSING
- 2026-04-13

### Error 2026-04-13T00:49:12+00:00
```
2026-04-13T00:49:12.9197535Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-13T00:49:12.9867846Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-8184644345379481703
2026-04-13T00:49:12.9868706Z     resource_test.go:629: Adding variable groupId=69dc3d8535f1f181a4dd7d8c
2026-04-13T00:50:31.3860569Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-13T01:19:18.0827444Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-13T01:19:18.0829473Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3978416447263887041
2026-04-13T01:19:18.3697663Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-2410790007799309766
2026-04-13T02:06:11.5345116Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-13T02:06:11.5345846Z     resource_test.go:629: Step 2/3 error: Error running apply: exit status 1
2026-04-13T02:06:11.5346269Z         
2026-04-13T02:06:11.5346932Z         Error: Provider produced inconsistent result after apply
2026-04-13T02:06:11.5347279Z         
2026-04-13T02:06:11.5347735Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2026-04-13T02:06:11.5348548Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-04-13T02:06:11.5349591Z         unexpected new value: .config_server_type: was cty.StringVal("DEDICATED"),
2026-04-13T02:06:11.5350084Z         but now cty.StringVal("EMBEDDED").
2026-04-13T02:06:11.5350358Z         
2026-04-13T02:06:11.5350834Z         This is a bug in the provider, which should be reported in the provider's own
2026-04-13T02:06:11.5351510Z         issue tracker.
2026-04-13T02:09:44.0596693Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (4753.38s)
```

- 2026-04-14

### Error 2026-04-14T00:52:13+00:00
```
2026-04-14T00:52:13.0103234Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-14T00:52:13.0772509Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-4808937145128206436
2026-04-14T00:52:13.0773492Z     resource_test.go:629: Adding variable groupId=69dd8fb77e7703c9cb11fb33
2026-04-14T00:53:48.7810632Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-14T01:17:39.0187741Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-14T01:17:39.0188978Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2778091872361328813
2026-04-14T01:17:39.4500075Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-7373340306358421813
2026-04-14T02:02:45.3907508Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-14T02:02:45.3908134Z     resource_test.go:629: Step 2/3 error: Error running apply: exit status 1
2026-04-14T02:02:45.3908533Z         
2026-04-14T02:02:45.3908991Z         Error: Provider produced inconsistent result after apply
2026-04-14T02:02:45.3909352Z         
2026-04-14T02:02:45.3909878Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2026-04-14T02:02:45.3910512Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-04-14T02:02:45.3911339Z         unexpected new value: .config_server_type: was cty.StringVal("DEDICATED"),
2026-04-14T02:02:45.3911879Z         but now cty.StringVal("EMBEDDED").
2026-04-14T02:02:45.3912167Z         
2026-04-14T02:02:45.3912629Z         This is a bug in the provider, which should be reported in the provider's own
2026-04-14T02:02:45.3913183Z         issue tracker.
2026-04-14T02:05:48.9885387Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (4321.06s)
```

- 2026-04-15

### Error 2026-04-15T00:49:26+00:00
```
2026-04-15T00:49:26.8089831Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-15T00:49:26.8748996Z     resource_test.go:629: Adding variable groupId=69dee094353adec06336ef70
2026-04-15T00:49:26.8751470Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-3150437672804061807
2026-04-15T00:50:47.2376592Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-15T01:16:33.7075328Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-15T01:16:33.7076220Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6321389107491843848
2026-04-15T01:16:34.4378879Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5198789887025650150
2026-04-15T02:03:31.5925348Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-15T02:03:31.5925898Z     resource_test.go:629: Step 2/3 error: Error running apply: exit status 1
2026-04-15T02:03:31.5926246Z         
2026-04-15T02:03:31.5926604Z         Error: Provider produced inconsistent result after apply
2026-04-15T02:03:31.5927056Z         
2026-04-15T02:03:31.5927643Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2026-04-15T02:03:31.5928491Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-04-15T02:03:31.5929082Z         unexpected new value: .config_server_type: was cty.StringVal("DEDICATED"),
2026-04-15T02:03:31.5929533Z         but now cty.StringVal("EMBEDDED").
2026-04-15T02:03:31.5929804Z         
2026-04-15T02:03:31.5930231Z         This is a bug in the provider, which should be reported in the provider's own
2026-04-15T02:03:31.5930625Z         issue tracker.
2026-04-15T02:07:34.5810269Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (4608.09s)
```

- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.7885588Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-16T00:53:12.8547640Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-9084227095834443073
2026-04-16T00:53:12.8548553Z     resource_test.go:629: Adding variable groupId=69e032ee81002038a8a0f411
2026-04-16T00:54:54.3423785Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-16T00:54:59.6617373Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-16T00:54:59.6618391Z     resource_test.go:629: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:54:59.6619062Z         
2026-04-16T00:54:59.6619489Z         Error: Error in create
2026-04-16T00:54:59.6619901Z         
2026-04-16T00:54:59.6620501Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.6621733Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.6622887Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.6623446Z         
2026-04-16T00:54:59.6624408Z         cluster name: test-acc-tf-c-9084227095834443073, API error details:
2026-04-16T00:54:59.6625862Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032ee81002038a8a0f411/clusters
2026-04-16T00:54:59.6627147Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.6628367Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.6629275Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.8237039Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5.90s)
```

- 2026-04-17 PASS an hour
- 2026-04-18 PASS an hour
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS an hour
- 2026-04-22 PASS 43 minutes
- 2026-04-23 PASS an hour
- 2026-04-24

### Error 2026-04-24T00:51:34+00:00
```
2026-04-24T00:51:34.5253857Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-24T00:51:34.5940430Z     resource_test.go:629: Adding variable groupId=69eabe9490d634ef33c86aae
2026-04-24T00:51:34.5941820Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-6117723563369620588
2026-04-24T00:52:55.0435799Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-24T03:53:01.4092050Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-24T03:53:01.4093028Z     resource_test.go:629: Step 1/3 error: Error running apply: exit status 1
2026-04-24T03:53:01.4093570Z         
2026-04-24T03:53:01.4094005Z         Error: Error in create
2026-04-24T03:53:01.4094268Z         
2026-04-24T03:53:01.4094605Z           with mongodbatlas_advanced_cluster.test,
2026-04-24T03:53:01.4095515Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-24T03:53:01.4096170Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-24T03:53:01.4096501Z         
2026-04-24T03:53:01.4096964Z         cluster=test-acc-tf-c-6117723563369620588 didn't reach desired state: IDLE,
2026-04-24T03:53:01.4097443Z         error: context deadline exceeded
2026-04-24T03:53:01.4201025Z    test_terraform_path=/home/runner/work/_temp/23350477-f948-41fb-84f6-625f8643416d/terraform test_step_number=1
2026-04-24T03:53:01.4836259Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10807.33s)
```

- 2026-04-25 PASS an hour
- 2026-04-26: MISSING
- 2026-04-27 PASS an hour
- 2026-04-28 PASS an hour
- 2026-04-29 PASS an hour
- 2026-04-30 PASS an hour
- 2026-05-01 PASS an hour
- 2026-05-02 PASS an hour
- 2026-05-03: MISSING
- 2026-05-04 PASS an hour
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-12 00:48](#error-2026-04-12t0048210000) |  | qa | 6629.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 35 minutes
  - PASS 32 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T00:48:21+00:00
```
2026-04-12T00:48:21.5229512Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-04-12T00:48:21.5896599Z     resource_test.go:629: Adding variable groupId=69daebd2abb831662d2a1e58
2026-04-12T00:48:21.5897754Z     resource_test.go:629: Adding variable clusterName=test-acc-tf-c-8717636376436622386
2026-04-12T00:50:48.4384294Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-12T01:15:34.9662078Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-12T01:15:34.9663108Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-1421328680759505161
2026-04-12T01:15:35.5507866Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1611370202780485626
2026-04-12T02:38:15.2926031Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-04-12T02:38:15.2926621Z     resource_test.go:629: Step 2/3 error: Error running apply: exit status 1
2026-04-12T02:38:15.2927138Z         
2026-04-12T02:38:15.2927540Z         Error: Provider produced inconsistent result after apply
2026-04-12T02:38:15.2927882Z         
2026-04-12T02:38:15.2928336Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2026-04-12T02:38:15.2929175Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-04-12T02:38:15.2930081Z         unexpected new value: .config_server_type: was cty.StringVal("DEDICATED"),
2026-04-12T02:38:15.2930577Z         but now cty.StringVal("EMBEDDED").
2026-04-12T02:38:15.2930868Z         
2026-04-12T02:38:15.2931337Z         This is a bug in the provider, which should be reported in the provider's own
2026-04-12T02:38:15.2931768Z         issue tracker.
2026-04-12T02:41:17.1559857Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (6629.50s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS an hour
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS an hour
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS an hour
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS an hour
