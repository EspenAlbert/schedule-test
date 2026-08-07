# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-10 00:49](#error-2026-07-10t0049400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041a2e2d93fff09dc5867/clusters/test-acc-tf-c-3029932659813066837 | dev | flaky_500 | 2414.00s
[2026-07-11 00:43](#error-2026-07-11t0043190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-07-21 00:44](#error-2026-07-21t0044290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 53 minutes
- 2026-07-10

### Error 2026-07-10T00:49:40+00:00
```
2026-07-10T00:49:40.8205860Z === RUN   TestAccGlobalClusterConfig_basic
2026-07-10T01:38:51.9430836Z === CONT  TestAccGlobalClusterConfig_basic
2026-07-10T01:39:01.9462439Z === NAME  TestAccGlobalClusterConfig_basic
2026-07-10T01:39:01.9464675Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:39:01.945972833Z, ProjectID: 6a5041a2e2d93fff09dc5867, Cluster name: test-acc-tf-c-3029932659813066837
2026-07-10T02:19:05.9529628Z === NAME  TestAccGlobalClusterConfig_basic
2026-07-10T02:19:05.9530967Z     resource_global_cluster_config_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:19:05.9531983Z         
2026-07-10T02:19:05.9532459Z         Error: Error in delete
2026-07-10T02:19:05.9532914Z         
2026-07-10T02:19:05.9533699Z         cluster name: test-acc-tf-c-3029932659813066837, API error details:
2026-07-10T02:19:05.9535214Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a2e2d93fff09dc5867/clusters/test-acc-tf-c-3029932659813066837
2026-07-10T02:19:05.9536250Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:19:05.9537327Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:19:05.9537920Z         BadRequestDetail: 
2026-07-10T02:19:05.9538404Z --- FAIL: TestAccGlobalClusterConfig_basic (2414.01s)
```

- 2026-07-11

### Error 2026-07-11T00:43:19+00:00
```
2026-07-11T00:43:19.0799986Z === RUN   TestAccGlobalClusterConfig_basic
2026-07-11T00:43:19.0801933Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-113941363193513440
2026-07-11T00:44:20.7279961Z     resource_global_cluster_config_test.go:30: 
2026-07-11T00:44:20.7281474Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:44:20.7284571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:44:20.7287625Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:44:20.7290219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:44:20.7293382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-07-11T00:44:20.7295944Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:30
2026-07-11T00:44:20.7296851Z         	Error:      	Received unexpected error:
2026-07-11T00:44:20.7298778Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:20.7299829Z         	Test:       	TestAccGlobalClusterConfig_basic
2026-07-11T00:44:20.7301550Z         	Messages:   	Project creation failed: test-acc-tf-p-113941363193513440, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:20.7303025Z --- FAIL: TestAccGlobalClusterConfig_basic (61.65s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 29 minutes
- 2026-07-14 PASS 40 minutes
- 2026-07-15 PASS 18 minutes
- 2026-07-16 PASS 58 minutes
- 2026-07-17 PASS 26 minutes
- 2026-07-18 PASS 18 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:44:29+00:00
```
2026-07-21T00:44:29.9633730Z === RUN   TestAccGlobalClusterConfig_basic
2026-07-21T00:44:29.9638247Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-4246687667520022453
2026-07-21T00:45:40.2906541Z     resource_global_cluster_config_test.go:30: 
2026-07-21T00:45:40.2908057Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:45:40.2911681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:45:40.2914784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:45:40.2916852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:45:40.2920315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2026-07-21T00:45:40.2922605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:30
2026-07-21T00:45:40.2923504Z         	Error:      	Received unexpected error:
2026-07-21T00:45:40.2925419Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:45:40.2926454Z         	Test:       	TestAccGlobalClusterConfig_basic
2026-07-21T00:45:40.2928129Z         	Messages:   	Project creation failed: test-acc-tf-p-4246687667520022453, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:45:40.2929233Z --- FAIL: TestAccGlobalClusterConfig_basic (70.33s)
```

- 2026-07-22 PASS 28 minutes
- 2026-07-23 PASS 32 minutes
- 2026-07-24 PASS an hour
- 2026-07-25 PASS 18 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 27 minutes
- 2026-07-30 PASS 38 minutes
- 2026-07-31 PASS 16 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 19 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 17 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 18 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 17 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 18 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 18 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 18 minutes
  - PASS 18 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
