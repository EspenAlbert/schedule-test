# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:54](#error-2026-05-16t0054140000) |  | dev | timeout | 2454.06s
[2026-05-21 01:03](#error-2026-05-21t0103560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s
[2026-05-28 00:58](#error-2026-05-28t0058050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.02s
[2026-05-30 01:01](#error-2026-05-30t0101070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 55 minutes
- 2026-05-09 PASS 49 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 50 minutes
- 2026-05-12 PASS 47 minutes
- 2026-05-13 PASS 46 minutes
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 44 minutes
- 2026-05-16

### Error 2026-05-16T00:54:14+00:00
```
2026-05-16T00:54:14.6290987Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-16T00:54:14.6305313Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-16T00:54:19.6349659Z     pre_check.go:46: Time before creating cluster: 2026-05-16T00:54:19.634308511Z, ProjectID: 6a07c0277d024d2d1e5b12fa, Cluster name: test-acc-tf-c-5595989879797927846
2026-05-16T01:35:09.2002645Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-16T01:35:09.2003416Z     resource_test.go:64: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-16T01:35:09.2003939Z         
2026-05-16T01:35:09.2005271Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6a07c0277d024d2d1e5b12fa), Cluster (test-acc-tf-c-5595989879797927846): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2026-05-16T01:35:09.2006223Z         
2026-05-16T01:35:09.2006563Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (2454.57s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 44 minutes
- 2026-05-20 PASS 50 minutes
- 2026-05-21

### Error 2026-05-21T01:03:56+00:00
```
2026-05-21T01:03:56.3178805Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-21T01:03:56.3179463Z     resource_test.go:64: Creating execution project (1): test-acc-tf-p-6609027788526746272
2026-05-21T01:05:04.7455246Z     resource_test.go:64: 
2026-05-21T01:05:04.7459769Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:04.7465026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:04.7467291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:05:04.7469031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-21T01:05:04.7470880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:80
2026-05-21T01:05:04.7473177Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:64
2026-05-21T01:05:04.7474469Z         	Error:      	Received unexpected error:
2026-05-21T01:05:04.7478764Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:04.7480639Z         	Test:       	TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-21T01:05:04.7482317Z         	Messages:   	Project creation failed: test-acc-tf-p-6609027788526746272, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:04.7483592Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (68.43s)
```

- 2026-05-22 PASS an hour
- 2026-05-23 PASS an hour
- 2026-05-24: MISSING
- 2026-05-25 PASS 48 minutes
- 2026-05-26 PASS 44 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T00:58:05+00:00
```
2026-05-28T00:58:05.3385798Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-28T00:58:05.3386389Z     resource_test.go:64: Creating execution project (1): test-acc-tf-p-6089477444306181850
2026-05-28T00:59:23.5553548Z     resource_test.go:64: 
2026-05-28T00:59:23.5557617Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:59:23.5562111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:59:23.5566165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:59:23.5569401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T00:59:23.5571494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:80
2026-05-28T00:59:23.5573925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:64
2026-05-28T00:59:23.5574862Z         	Error:      	Received unexpected error:
2026-05-28T00:59:23.5576993Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:23.5578311Z         	Test:       	TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-28T00:59:23.5581433Z         	Messages:   	Project creation failed: test-acc-tf-p-6089477444306181850, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:23.5584563Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (78.22s)
```

- 2026-05-29 PASS 54 minutes
- 2026-05-30

### Error 2026-05-30T01:01:07+00:00
```
2026-05-30T01:01:07.6649919Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-30T01:01:07.6650560Z     resource_test.go:64: Creating execution project (1): test-acc-tf-p-7789331398949995486
2026-05-30T01:02:17.3837852Z     resource_test.go:64: 
2026-05-30T01:02:17.3844624Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:17.3849217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:02:17.3851414Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:02:17.3853713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:02:17.3856331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:80
2026-05-30T01:02:17.3860049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:64
2026-05-30T01:02:17.3862809Z         	Error:      	Received unexpected error:
2026-05-30T01:02:17.3867114Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:17.3869065Z         	Test:       	TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-30T01:02:17.3870905Z         	Messages:   	Project creation failed: test-acc-tf-p-7789331398949995486, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:17.3872208Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (69.72s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 48 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 46 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-24 01:01](#error-2026-05-24t0101500000) |  | qa | timeout | 3048.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 47 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 46 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24

### Error 2026-05-24T01:01:50+00:00
```
2026-05-24T01:01:50.3886823Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-24T01:01:50.3901056Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-24T01:01:55.3903736Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-24T01:01:55.3907796Z     pre_check.go:46: Time before creating cluster: 2026-05-24T01:01:55.390025641Z, ProjectID: 6a124dfc0756d72c2234199f, Cluster name: test-acc-tf-c-1904612735115752775
2026-05-24T01:52:39.1638891Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-05-24T01:52:39.1639696Z     resource_test.go:64: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-24T01:52:39.1640261Z         
2026-05-24T01:52:39.1641784Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6a124dfc0756d72c2234199f), Cluster (test-acc-tf-c-1904612735115752775): timeout while waiting for state to become 'DELETED' (last state: 'RECOVERING', timeout: 25m0s)
2026-05-24T01:52:39.1642887Z         
2026-05-24T01:52:39.1643234Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (3048.77s)
```

- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 47 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
