# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:49](#error-2026-07-09t0049090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.03s
[2026-07-11 00:43](#error-2026-07-11t0043120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:49:09+00:00
```
2026-07-09T00:49:09.0820660Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-07-09T00:49:09.0821762Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-4564207135792637113
2026-07-09T00:51:02.4196809Z     resource_test.go:22: 
2026-07-09T00:51:02.4198832Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:02.4202566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:02.4206314Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:02.4209857Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T00:51:02.4212163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:33
2026-07-09T00:51:02.4214309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:22
2026-07-09T00:51:02.4215168Z         	Error:      	Received unexpected error:
2026-07-09T00:51:02.4217541Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:02.4218720Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2026-07-09T00:51:02.4220581Z         	Messages:   	Project creation failed: test-acc-tf-p-4564207135792637113, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:02.4221844Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (113.34s)
```

- 2026-07-10 PASS an hour
- 2026-07-11

### Error 2026-07-11T00:43:12+00:00
```
2026-07-11T00:43:12.8168936Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-07-11T00:43:12.8170453Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-6666235995845949270
2026-07-11T00:44:15.8047270Z     resource_test.go:22: 
2026-07-11T00:44:15.8049066Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:44:15.8051257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:44:15.8054070Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:44:15.8056762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:44:15.8059123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:33
2026-07-11T00:44:15.8061908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:22
2026-07-11T00:44:15.8063016Z         	Error:      	Received unexpected error:
2026-07-11T00:44:15.8065035Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:15.8066301Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2026-07-11T00:44:15.8068316Z         	Messages:   	Project creation failed: test-acc-tf-p-6666235995845949270, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:15.8069542Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (62.99s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 54 minutes
- 2026-07-14 PASS 56 minutes
- 2026-07-15 PASS 46 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 53 minutes
- 2026-07-18 PASS 59 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 49 minutes
- 2026-07-22 PASS an hour
- 2026-07-23 PASS an hour
- 2026-07-24 PASS an hour
- 2026-07-25 PASS 46 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 50 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 44 minutes
- 2026-08-01 PASS 45 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 47 minutes
- 2026-08-04 PASS 47 minutes
- 2026-08-05 PASS 46 minutes
- 2026-08-06 PASS 46 minutes
- 2026-08-07 PASS 46 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 45 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 44 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 45 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 46 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 45 minutes
  - PASS 46 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 44 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
