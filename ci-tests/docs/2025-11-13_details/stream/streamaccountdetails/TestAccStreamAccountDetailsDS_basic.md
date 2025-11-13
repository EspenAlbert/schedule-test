# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e435a13b66d7cb5f01f/clusters | dev | out_of_capacity | 9.01s

## Timeline
- 2025-10-14: MISSING
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
- 2025-11-05
  - PASS 15 minutes
  - PASS 13 minutes
- 2025-11-06 PASS 17 minutes
- 2025-11-07 PASS 12 minutes
- 2025-11-08 PASS 41 minutes
- 2025-11-09 PASS 12 minutes
- 2025-11-10 PASS 11 minutes
- 2025-11-11 PASS 12 minutes
- 2025-11-12 PASS 15 minutes
- 2025-11-13
  - PASS 20 minutes
  - PASS 13 minutes