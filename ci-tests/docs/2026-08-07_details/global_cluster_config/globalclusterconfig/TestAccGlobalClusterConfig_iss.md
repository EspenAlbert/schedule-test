# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-10 00:49](#error-2026-07-10t0049400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041a2e2d93fff09dc5867/clusters/test-acc-tf-c-3761739357752066521 | dev | flaky_500 | 2422.04s
[2026-07-11 00:45](#error-2026-07-11t0045320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-21 00:46](#error-2026-07-21t0046410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 53 minutes
- 2026-07-10

### Error 2026-07-10T00:49:40+00:00
```
2026-07-10T00:49:40.8210766Z === RUN   TestAccGlobalClusterConfig_iss
2026-07-10T01:38:51.9431202Z === CONT  TestAccGlobalClusterConfig_iss
2026-07-10T01:39:11.9514074Z === NAME  TestAccGlobalClusterConfig_iss
2026-07-10T01:39:11.9518167Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:39:11.951143289Z, ProjectID: 6a5041a2e2d93fff09dc5867, Cluster name: test-acc-tf-c-3761739357752066521
2026-07-10T02:19:05.9528986Z   
2026-07-10T02:19:14.3498785Z === NAME  TestAccGlobalClusterConfig_iss
2026-07-10T02:19:14.3499830Z     resource_global_cluster_config_test.go:62: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:19:14.3500809Z         
2026-07-10T02:19:14.3501101Z         Error: Error in delete
2026-07-10T02:19:14.3501382Z         
2026-07-10T02:19:14.3501838Z         cluster name: test-acc-tf-c-3761739357752066521, API error details:
2026-07-10T02:19:14.3502756Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a2e2d93fff09dc5867/clusters/test-acc-tf-c-3761739357752066521
2026-07-10T02:19:14.3503594Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:19:14.3504273Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:19:14.3504730Z         BadRequestDetail: 
2026-07-10T02:19:14.3505066Z --- FAIL: TestAccGlobalClusterConfig_iss (2422.41s)
```

- 2026-07-11

### Error 2026-07-11T00:45:32+00:00
```
2026-07-11T00:45:32.2036993Z === RUN   TestAccGlobalClusterConfig_iss
2026-07-11T00:45:32.2037699Z     resource_global_cluster_config_test.go:53: Creating execution project (1): test-acc-tf-p-6561834372977661403
2026-07-11T00:46:34.3179480Z     resource_global_cluster_config_test.go:53: 
2026-07-11T00:46:34.3182243Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:46:34.3185485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:46:34.3188107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:46:34.3190464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:46:34.3193531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:53
2026-07-11T00:46:34.3194875Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:46:34.3195401Z         	Error:      	Received unexpected error:
2026-07-11T00:46:34.3197315Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:34.3198380Z         	Test:       	TestAccGlobalClusterConfig_iss
2026-07-11T00:46:34.3200117Z         	Messages:   	Project creation failed: test-acc-tf-p-6561834372977661403, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:34.3201278Z --- FAIL: TestAccGlobalClusterConfig_iss (62.12s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 29 minutes
- 2026-07-14 PASS 43 minutes
- 2026-07-15 PASS 19 minutes
- 2026-07-16 PASS 59 minutes
- 2026-07-17 PASS 29 minutes
- 2026-07-18 PASS 19 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:41+00:00
```
2026-07-21T00:46:41.9092411Z === RUN   TestAccGlobalClusterConfig_iss
2026-07-21T00:46:41.9093321Z     resource_global_cluster_config_test.go:53: Creating execution project (1): test-acc-tf-p-3916240721790062727
2026-07-21T00:47:57.4494859Z     resource_global_cluster_config_test.go:53: 
2026-07-21T00:47:57.4499671Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:57.4501610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:57.4503352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:47:57.4505041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:47:57.4507098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:53
2026-07-21T00:47:57.4508411Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:47:57.4508938Z         	Error:      	Received unexpected error:
2026-07-21T00:47:57.4511075Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:57.4512211Z         	Test:       	TestAccGlobalClusterConfig_iss
2026-07-21T00:47:57.4513924Z         	Messages:   	Project creation failed: test-acc-tf-p-3916240721790062727, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:57.4515045Z --- FAIL: TestAccGlobalClusterConfig_iss (75.54s)
```

- 2026-07-22 PASS 26 minutes
- 2026-07-23 PASS 36 minutes
- 2026-07-24 PASS an hour
- 2026-07-25 PASS 21 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 35 minutes
- 2026-07-30 PASS 39 minutes
- 2026-07-31 PASS 17 minutes
- 2026-08-01 PASS 17 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 19 minutes
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 18 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 19 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 19 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 minutes
  - PASS 18 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
