# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_priorityOldSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-04 01:49](#error-2025-05-04t0149210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6816baab5763026acc28ab7c/clusters | qa | out_of_capacity | 4.09s
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters | dev | flaky_500 | 5.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 12 minutes
- 2025-04-13 PASS 18 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 13 minutes
- 2025-04-16
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-04-17 PASS 14 minutes
- 2025-04-18 PASS 15 minutes
- 2025-04-19 PASS 18 minutes
- 2025-04-20 PASS 18 minutes
- 2025-04-21 PASS 16 minutes
- 2025-04-22 PASS 14 minutes
- 2025-04-23 PASS 17 minutes
- 2025-04-24 PASS 12 minutes
- 2025-04-25 PASS 13 minutes
- 2025-04-26 PASS 12 minutes
- 2025-04-27 PASS 16 minutes
- 2025-04-28 PASS 16 minutes
- 2025-04-29 PASS 15 minutes
- 2025-04-30 PASS 13 minutes
- 2025-05-01
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-05-02 PASS 17 minutes
- 2025-05-03 PASS 14 minutes
- 2025-05-04

### Error 2025-05-04T01:49:21+00:00
```
2025-05-04T01:49:21.7167314Z === RUN   TestAccClusterAdvancedCluster_priorityOldSchema
2025-05-04T01:49:21.7196780Z === CONT  TestAccClusterAdvancedCluster_priorityOldSchema
2025-05-04T01:49:21.7239769Z === NAME  TestAccClusterAdvancedCluster_priorityOldSchema
2025-05-04T01:49:21.7240417Z     resource_advanced_cluster_test.go:1063: Step 2/5 error: Error running apply: exit status 1
2025-05-04T01:49:21.7240949Z         
2025-05-04T01:49:21.7241235Z         Error: Error in create (legacy)
2025-05-04T01:49:21.7241612Z         
2025-05-04T01:49:21.7241943Z           with mongodbatlas_advanced_cluster.test,
2025-05-04T01:49:21.7242862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-04T01:49:21.7244383Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-04T01:49:21.7245004Z         
2025-05-04T01:49:21.7245438Z         cluster name test-acc-tf-c-7002416171127216872. API error detail
2025-05-04T01:49:21.7246266Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816baab5763026acc28ab7c/clusters
2025-05-04T01:49:21.7246956Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-05-04T01:49:21.7247755Z         region is currently out of capacity for the requested instance size. Reason:
2025-05-04T01:49:21.7248254Z         Conflict. Params: [], BadRequestDetail: 
2025-05-04T01:49:21.7248652Z --- FAIL: TestAccClusterAdvancedCluster_priorityOldSchema (4.94s)
```

- 2025-05-05 PASS 15 minutes
- 2025-05-06 PASS 15 minutes
- 2025-05-07 PASS 11 minutes
- 2025-05-08 PASS 18 minutes
- 2025-05-09 PASS 16 minutes
- 2025-05-10 PASS 13 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.8052575Z === RUN   TestAccClusterAdvancedCluster_priorityOldSchema
2025-05-11T00:30:01.8052933Z     shared_resource.go:84: 
2025-05-11T00:30:01.8053809Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8055543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8057291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8059021Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8061019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1062
2025-05-11T00:30:01.8062016Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8062880Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8063624Z         	Test:       	TestAccClusterAdvancedCluster_priorityOldSchema
2025-05-11T00:30:01.8064661Z         	Messages:   	Project creation failed: test-acc-tf-p-269728590905063103, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8065389Z --- FAIL: TestAccClusterAdvancedCluster_priorityOldSchema (0.02s)
```

- 2025-05-12 PASS 16 minutes
- 2025-05-13
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-05-14 PASS 17 minutes
- 2025-05-15 PASS 15 minutes
- 2025-05-16 PASS 12 minutes
- 2025-05-17 PASS 11 minutes
- 2025-05-18 PASS 13 minutes
- 2025-05-19 PASS 14 minutes
- 2025-05-20 PASS 11 minutes
- 2025-05-21
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-05-22 PASS 15 minutes
- 2025-05-23 PASS 14 minutes
- 2025-05-24 PASS 11 minutes
- 2025-05-25 PASS 16 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 14 minutes
- 2025-05-28
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-05-29 PASS 21 minutes
- 2025-05-30
  - PASS an hour
  - PASS 22 minutes
- 2025-05-31 PASS 16 minutes
- 2025-06-01
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-06-02
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 17 minutes
- 2025-06-04 PASS 13 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5904621Z === RUN   TestAccClusterAdvancedCluster_priorityOldSchema
2025-06-05T00:35:38.5953056Z === CONT  TestAccClusterAdvancedCluster_priorityOldSchema
2025-06-05T00:35:38.6368906Z === NAME  TestAccClusterAdvancedCluster_priorityOldSchema
2025-06-05T00:35:38.6369944Z     resource_advanced_cluster_test.go:1066: Step 2/5 error: Error running apply: exit status 1
2025-06-05T00:35:38.6370655Z         
2025-06-05T00:35:38.6371121Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6371566Z         
2025-06-05T00:35:38.6372125Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6373274Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6374315Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6374834Z         
2025-06-05T00:35:38.6375546Z         cluster name: test-acc-tf-c-75047060900504280, API error details:
2025-06-05T00:35:38.6376710Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters
2025-06-05T00:35:38.6377918Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6379085Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6379751Z         BadRequestDetail: 
2025-06-05T00:35:38.6393657Z --- FAIL: TestAccClusterAdvancedCluster_priorityOldSchema (5.99s)
```

- 2025-06-06 PASS 13 minutes
- 2025-06-07 PASS 13 minutes
- 2025-06-08 PASS 12 minutes
- 2025-06-09 PASS 15 minutes
- 2025-06-10 PASS 18 minutes
- 2025-06-11
  - PASS 14 minutes
  - PASS 16 minutes
- 2025-06-12 PASS 15 minutes
- 2025-06-13 PASS 15 minutes
- 2025-06-14 PASS 26 minutes
- 2025-06-15 PASS 14 minutes
- 2025-06-16 PASS 19 minutes
- 2025-06-17 PASS 14 minutes
- 2025-06-18
  - PASS 18 minutes
  - PASS 14 minutes
- 2025-06-19 PASS 44 minutes
- 2025-06-20 PASS 13 minutes
- 2025-06-21 PASS 13 minutes
- 2025-06-22 PASS 13 minutes
- 2025-06-23 PASS 14 minutes
- 2025-06-24 PASS 12 minutes
- 2025-06-25 PASS 14 minutes
- 2025-06-26
  - PASS 29 minutes
  - PASS 12 minutes
- 2025-06-27 PASS 12 minutes
- 2025-06-28 PASS 13 minutes
- 2025-06-29 PASS 15 minutes
- 2025-06-30 PASS 16 minutes
- 2025-07-01
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 13 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 13 minutes
- 2025-07-09 PASS 15 minutes
- 2025-07-10 PASS 12 minutes