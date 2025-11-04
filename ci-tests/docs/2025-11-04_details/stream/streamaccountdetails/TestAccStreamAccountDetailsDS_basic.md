# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:28](#error-2025-10-07t0328020000) |  | dev |  | 10808.05s
[2025-10-20 10:26](#error-2025-10-20t1026210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e435a13b66d7cb5f01f/clusters | dev | out_of_capacity | 9.01s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 11 minutes
- 2025-10-07

### Error 2025-10-07T03:28:02+00:00
```
2025-10-07T03:28:02.2619952Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-10-07T03:28:02.2621197Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-8274181345787068109
2025-10-07T03:28:02.2622700Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-10-07T03:28:02.2624392Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:27:30.758523858Z, ProjectID: 68e45e6b12e64d6587b9aab8, Cluster name: test-acc-tf-c-5246464645947773094
2025-10-07T03:28:02.2635976Z   
2025-10-07T03:28:02.2636499Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2025-10-07T03:28:02.2636929Z         
2025-10-07T03:28:02.2637258Z         Error: Error in create
2025-10-07T03:28:02.2637578Z         
2025-10-07T03:28:02.2638292Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:28:02.2639617Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:28:02.2640829Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:28:02.2641442Z         
2025-10-07T03:28:02.2642316Z         cluster=test-acc-tf-c-5246464645947773094 didn't reach desired state: IDLE,
2025-10-07T03:28:02.2643157Z         error: context deadline exceeded
2025-10-07T03:28:02.2643770Z --- FAIL: TestAccStreamAccountDetailsDS_basic (10808.46s)
```

- 2025-10-08 PASS 15 minutes
- 2025-10-09 PASS 22 minutes
- 2025-10-10 PASS 16 minutes
- 2025-10-11 PASS 16 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 17 minutes
- 2025-10-14 PASS 14 minutes
- 2025-10-15 PASS 13 minutes
- 2025-10-16 PASS 21 minutes
- 2025-10-17 PASS 14 minutes
- 2025-10-18 PASS 14 minutes
- 2025-10-19 PASS 13 minutes
- 2025-10-20
  - PASS 14 minutes
  - FAIL 9 seconds

### Error 2025-10-20T10:26:21+00:00
```
2025-10-20T10:26:21.3437563Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-10-20T10:26:21.3438640Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-4880097016534602064
2025-10-20T10:26:21.3440287Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-10-20T10:26:21.3444711Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:26:19.718658889Z, ProjectID: 68f60e435a13b66d7cb5f01f, Cluster name: test-acc-tf-c-4495451958179010490
2025-10-20T10:26:21.3467033Z    test_working_directory=/tmp/plugintest3075245729 test_terraform_path=/home/runner/work/_temp/b5c12a3c-bf20-4b95-be3b-8d1cb4908ee4/terraform test_name=TestAccStreamAccountDetailsDS_basic
2025-10-20T10:26:21.3468890Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2025-10-20T10:26:21.3469791Z         
2025-10-20T10:26:21.3470326Z         Error: Error in create
2025-10-20T10:26:21.3470815Z         
2025-10-20T10:26:21.3471535Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:26:21.3472948Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:26:21.3474242Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:26:21.3474919Z         
2025-10-20T10:26:21.3475742Z         cluster name: test-acc-tf-c-4495451958179010490, API error details:
2025-10-20T10:26:21.3476646Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e435a13b66d7cb5f01f/clusters
2025-10-20T10:26:21.3477365Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:21.3478031Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:21.3478551Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:21.3478941Z --- FAIL: TestAccStreamAccountDetailsDS_basic (9.10s)
```

- 2025-10-21 PASS 13 minutes
- 2025-10-22
  - PASS 15 minutes
  - PASS 11 minutes
- 2025-10-23 PASS 16 minutes
- 2025-10-24 PASS 16 minutes
- 2025-10-25 PASS 12 minutes
- 2025-10-26 PASS 13 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 15 minutes
- 2025-10-29 PASS 18 minutes
- 2025-10-30 PASS 12 minutes
- 2025-10-31 PASS 14 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 minutes
- 2025-11-03 PASS 11 minutes
- 2025-11-04 PASS 15 minutes