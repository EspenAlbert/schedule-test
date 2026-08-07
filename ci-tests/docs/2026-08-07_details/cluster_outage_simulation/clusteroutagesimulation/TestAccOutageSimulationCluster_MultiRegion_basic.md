# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 114.00s
[2026-07-11 00:44](#error-2026-07-11t0044150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:02+00:00
```
2026-07-09T00:51:02.4222367Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-07-09T00:51:02.4222982Z     resource_test.go:64: Creating execution project (1): test-acc-tf-p-115731095454038473
2026-07-09T00:52:56.4385747Z     resource_test.go:64: 
2026-07-09T00:52:56.4388099Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:52:56.4390964Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:52:56.4393594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:52:56.4395558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T00:52:56.4398253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:80
2026-07-09T00:52:56.4400556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:64
2026-07-09T00:52:56.4401482Z         	Error:      	Received unexpected error:
2026-07-09T00:52:56.4403999Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:56.4405159Z         	Test:       	TestAccOutageSimulationCluster_MultiRegion_basic
2026-07-09T00:52:56.4407147Z         	Messages:   	Project creation failed: test-acc-tf-p-115731095454038473, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:56.4408422Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (114.02s)
```

- 2026-07-10 PASS an hour
- 2026-07-11

### Error 2026-07-11T00:44:15+00:00
```
2026-07-11T00:44:15.8070230Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-07-11T00:44:15.8070956Z     resource_test.go:64: Creating execution project (1): test-acc-tf-p-5547439992027730439
2026-07-11T00:45:40.8865252Z     resource_test.go:64: 
2026-07-11T00:45:40.8867032Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:40.8870142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:40.8873037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:40.8875401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:45:40.8877400Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:80
2026-07-11T00:45:40.8879616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:64
2026-07-11T00:45:40.8880505Z         	Error:      	Received unexpected error:
2026-07-11T00:45:40.8882564Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:40.8883752Z         	Test:       	TestAccOutageSimulationCluster_MultiRegion_basic
2026-07-11T00:45:40.8885795Z         	Messages:   	Project creation failed: test-acc-tf-p-5547439992027730439, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:40.8886881Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (85.08s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS 56 minutes
- 2026-07-15 PASS 48 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 55 minutes
- 2026-07-18 PASS 57 minutes
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
- 2026-07-29 PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 47 minutes
- 2026-08-01 PASS 47 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 48 minutes
- 2026-08-04 PASS 50 minutes
- 2026-08-05 PASS 47 minutes
- 2026-08-06 PASS 52 minutes
- 2026-08-07 PASS 55 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 45 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 51 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 47 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 44 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 48 minutes
  - PASS 47 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 47 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
