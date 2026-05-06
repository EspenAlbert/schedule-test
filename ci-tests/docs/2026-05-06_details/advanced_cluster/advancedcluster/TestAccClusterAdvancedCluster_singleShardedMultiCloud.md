# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046590000) |  | dev | timeout | 11762.05s
[2026-04-08 00:45](#error-2026-04-08t0045160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d5a51c74e39a66414a275f/clusters | dev | out_of_capacity | 10.09s
[2026-04-09 00:42](#error-2026-04-09t0042100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d6f5e3bcd76cc4105fdb36/clusters | dev | out_of_capacity | 85.01s
[2026-04-11 00:48](#error-2026-04-11t0048140000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d99a4a92f7ea8dceed8fd9/clusters | dev | out_of_capacity | 5.09s
[2026-04-16 00:51](#error-2026-04-16t0051230000) |  | dev | flaky_500 | 38.08s
[2026-04-24 00:51](#error-2026-04-24t0051290000) |  | dev | timeout | 10810.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:59+00:00
```
2026-04-07T00:46:59.0535527Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-07T00:48:53.7956472Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-07T04:04:52.6677431Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-07T04:04:52.6678206Z     resource_test.go:159: Step 2/3 error: Error running apply: exit status 1
2026-04-07T04:04:52.6678592Z         
2026-04-07T04:04:52.6679040Z         Error: Error in delete
2026-04-07T04:04:52.6679434Z         
2026-04-07T04:04:52.6680021Z         cluster=test-acc-tf-c-7611753620330549594 didn't reach desired state:
2026-04-07T04:04:52.6680870Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:04:52.6681340Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:04:53.0566509Z    test_terraform_path=/home/runner/work/_temp/c220ded5-e5bd-48d4-b24e-d60744dcbe91/terraform test_step_number=2
2026-04-07T04:04:53.0567358Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:04:53.0567824Z         
2026-04-07T04:04:53.0568075Z         Error: Error in delete
2026-04-07T04:04:53.0568327Z         
2026-04-07T04:04:53.0568750Z         cluster name: test-acc-tf-c-7611753620330549594, API error details:
2026-04-07T04:04:53.0570141Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d45403425cee31650cbf83/clusters/test-acc-tf-c-7611753620330549594
2026-04-07T04:04:53.0570809Z         DELETE: HTTP 400 Bad Request (Error code:
2026-04-07T04:04:53.0571278Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2026-04-07T04:04:53.0571883Z         test-acc-tf-c-7611753620330549594 has already been requested for deletion.
2026-04-07T04:04:53.0572503Z         Reason: Bad Request. Params: [test-acc-tf-c-7611753620330549594],
2026-04-07T04:04:53.0572906Z         BadRequestDetail: 
2026-04-07T04:04:53.0573291Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (11762.48s)
```

- 2026-04-08

### Error 2026-04-08T00:45:16+00:00
```
2026-04-08T00:45:16.3724225Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-08T00:46:47.3061890Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-08T00:46:53.5237767Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-08T00:46:53.5238934Z     resource_test.go:159: Step 1/3 error: Error running apply: exit status 1
2026-04-08T00:46:53.5239677Z         
2026-04-08T00:46:53.5240225Z         Error: Error in create
2026-04-08T00:46:53.5240743Z         
2026-04-08T00:46:53.5241425Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T00:46:53.5242881Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T00:46:53.5244146Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T00:46:53.5244851Z         
2026-04-08T00:46:53.5245668Z         cluster name: test-acc-tf-c-131408783063901933, API error details:
2026-04-08T00:46:53.5246896Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a51c74e39a66414a275f/clusters
2026-04-08T00:46:53.5248371Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-08T00:46:53.5249766Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-08T00:46:53.5251041Z         Conflict. Params: [], BadRequestDetail: 
2026-04-08T00:46:53.6440210Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10.90s)
```

- 2026-04-09

### Error 2026-04-09T00:42:10+00:00
```
2026-04-09T00:42:10.7076805Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-09T00:48:13.3541381Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-09T00:48:18.8859790Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-09T00:48:18.8860680Z     resource_test.go:159: Step 1/3 error: Error running apply: exit status 1
2026-04-09T00:48:18.8861252Z         
2026-04-09T00:48:18.8861794Z         Error: Error in create
2026-04-09T00:48:18.8862260Z         
2026-04-09T00:48:18.8862958Z           with mongodbatlas_advanced_cluster.test,
2026-04-09T00:48:18.8864053Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-09T00:48:18.8864976Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-09T00:48:18.8865796Z         
2026-04-09T00:48:18.8866818Z         cluster name: test-acc-tf-c-3510418204884966281, API error details:
2026-04-09T00:48:18.8867572Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f5e3bcd76cc4105fdb36/clusters
2026-04-09T00:48:18.8868291Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-09T00:48:18.8868960Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-09T00:48:18.8869487Z         Conflict. Params: [], BadRequestDetail: 
2026-04-09T00:48:18.8971938Z   
2026-04-09T00:48:18.9520357Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (85.08s)
```

- 2026-04-10 PASS an hour
- 2026-04-11

### Error 2026-04-11T00:48:14+00:00
```
2026-04-11T00:48:14.9802802Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-11T00:49:45.7486301Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-11T00:49:51.3040224Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-11T00:49:51.3042940Z     resource_test.go:159: Step 1/3 error: Error running apply: exit status 1
2026-04-11T00:49:51.3045106Z         
2026-04-11T00:49:51.3045860Z         Error: Error in create
2026-04-11T00:49:51.3048815Z         
2026-04-11T00:49:51.3049421Z           with mongodbatlas_advanced_cluster.test,
2026-04-11T00:49:51.3050690Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-11T00:49:51.3060416Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-11T00:49:51.3061036Z         
2026-04-11T00:49:51.3062069Z         cluster name: test-acc-tf-c-5087137319609679602, API error details:
2026-04-11T00:49:51.3063393Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d99a4a92f7ea8dceed8fd9/clusters
2026-04-11T00:49:51.3064731Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-11T00:49:51.3065975Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-11T00:49:51.3066947Z         Conflict. Params: [], BadRequestDetail: 
2026-04-11T00:49:51.3753150Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (5.88s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 48 minutes
- 2026-04-14 PASS 41 minutes
- 2026-04-15 PASS 46 minutes
- 2026-04-16

### Error 2026-04-16T00:51:23+00:00
```
2026-04-16T00:51:23.5133435Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-16T00:52:02.2587378Z     shared_resource.go:160: 
2026-04-16T00:52:02.2589234Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:52:02.2592382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-16T00:52:02.2594907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-16T00:52:02.2597635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-16T00:52:02.2600061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-16T00:52:02.2602394Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:166
2026-04-16T00:52:02.2604521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:159
2026-04-16T00:52:02.2605328Z         	Error:      	Received unexpected error:
2026-04-16T00:52:02.2606241Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T00:52:02.2606926Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-16T00:52:02.2608067Z         	Messages:   	Project creation failed: test-acc-tf-p-8672906093492638644, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T00:52:02.2608899Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (38.75s)
```

- 2026-04-17 PASS 43 minutes
- 2026-04-18 PASS 55 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 51 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 57 minutes
- 2026-04-24

### Error 2026-04-24T00:51:29+00:00
```
2026-04-24T00:51:29.0800854Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-24T00:52:54.2028307Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-24T03:53:01.4202342Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-04-24T03:53:01.4203600Z     resource_test.go:159: Step 1/3 error: Error running apply: exit status 1
2026-04-24T03:53:01.4204477Z         
2026-04-24T03:53:01.4205061Z         Error: Error in create
2026-04-24T03:53:01.4205943Z         
2026-04-24T03:53:01.4206540Z           with mongodbatlas_advanced_cluster.test,
2026-04-24T03:53:01.4207331Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-24T03:53:01.4208003Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-24T03:53:01.4208348Z         
2026-04-24T03:53:01.4216399Z         cluster=test-acc-tf-c-5149737476947463721 didn't reach desired state: IDLE,
2026-04-24T03:53:01.4217541Z         error: context deadline exceeded
2026-04-24T03:53:01.4866577Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10810.73s)
```

- 2026-04-25 PASS 41 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 47 minutes
- 2026-04-28 PASS an hour
- 2026-04-29 PASS 51 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 48 minutes
- 2026-05-02 PASS 40 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 45 minutes
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 42 minutes
  - PASS 38 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 41 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 43 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 47 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 43 minutes
- 2026-05-04 PASS 39 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 43 minutes
