# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:54](#error-2026-05-16t0054370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 28 minutes
  - PASS 55 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 25 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 18 minutes
- 2026-05-12 PASS 18 minutes
- 2026-05-13 PASS 17 minutes
- 2026-05-14 PASS 44 minutes
- 2026-05-15 PASS 21 minutes
- 2026-05-16

### Error 2026-05-16T00:54:37+00:00
```
2026-05-16T00:54:37.3722359Z === RUN   TestAccCluster_withAutoScalingAWS
2026-05-16T00:55:45.4315925Z     shared_resource.go:160: 
2026-05-16T00:55:45.4317836Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:55:45.4322797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-16T00:55:45.4326185Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-16T00:55:45.4328502Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-16T00:55:45.4330773Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-16T00:55:45.4332632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:971
2026-05-16T00:55:45.4333402Z         	Error:      	Received unexpected error:
2026-05-16T00:55:45.4335316Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:45.4336343Z         	Test:       	TestAccCluster_withAutoScalingAWS
2026-05-16T00:55:45.4338359Z         	Messages:   	Project creation failed: test-acc-tf-p-624216920981925122, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:45.4339530Z --- FAIL: TestAccCluster_withAutoScalingAWS (68.06s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 37 minutes
- 2026-05-19 PASS 18 minutes
- 2026-05-20 PASS 18 minutes
- 2026-05-21 PASS 25 minutes
- 2026-05-22 PASS 31 minutes
- 2026-05-23 PASS 31 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 24 minutes
- 2026-05-26 PASS 19 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28 PASS 27 minutes
- 2026-05-29 PASS 21 minutes
- 2026-05-30 PASS 19 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 22 minutes
- 2026-06-02 PASS 17 minutes
- 2026-06-03 PASS 43 minutes
- 2026-06-04 PASS 34 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 27 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 21 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 22 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
