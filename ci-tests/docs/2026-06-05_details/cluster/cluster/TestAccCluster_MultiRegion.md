# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:55](#error-2026-05-09t0055490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.04s
[2026-05-23 00:59](#error-2026-05-23t0059370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-05-28 00:56](#error-2026-05-28t0056480000) |  | dev | flaky_500 | 35.08s
[2026-05-30 01:01](#error-2026-05-30t0101010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS an hour
  - PASS an hour
- 2026-05-08 PASS 46 minutes
- 2026-05-09

### Error 2026-05-09T00:55:49+00:00
```
2026-05-09T00:55:49.8359881Z === RUN   TestAccCluster_MultiRegion
2026-05-09T00:57:02.1953971Z     shared_resource.go:160: 
2026-05-09T00:57:02.1962739Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:57:02.1966529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T00:57:02.1969234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T00:57:02.1971218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T00:57:02.1973291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T00:57:02.1975416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-05-09T00:57:02.1976305Z         	Error:      	Received unexpected error:
2026-05-09T00:57:02.1978266Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:02.1979578Z         	Test:       	TestAccCluster_MultiRegion
2026-05-09T00:57:02.1981861Z         	Messages:   	Project creation failed: test-acc-tf-p-5012091151921235265, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:02.1983210Z --- FAIL: TestAccCluster_MultiRegion (72.36s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 45 minutes
- 2026-05-12 PASS 42 minutes
- 2026-05-13 PASS 42 minutes
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 42 minutes
- 2026-05-16 PASS 37 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 40 minutes
- 2026-05-20 PASS 41 minutes
- 2026-05-21 PASS an hour
- 2026-05-22 PASS an hour
- 2026-05-23

### Error 2026-05-23T00:59:37+00:00
```
2026-05-23T00:59:37.9691441Z === RUN   TestAccCluster_MultiRegion
2026-05-23T01:00:41.7841720Z     shared_resource.go:160: 
2026-05-23T01:00:41.7844095Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:00:41.7848300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-23T01:00:41.7852613Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-23T01:00:41.7856204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-23T01:00:41.7858459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-23T01:00:41.7860373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-05-23T01:00:41.7861168Z         	Error:      	Received unexpected error:
2026-05-23T01:00:41.7863094Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:41.7864463Z         	Test:       	TestAccCluster_MultiRegion
2026-05-23T01:00:41.7866185Z         	Messages:   	Project creation failed: test-acc-tf-p-147893836608789519, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:41.7867653Z --- FAIL: TestAccCluster_MultiRegion (63.82s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 47 minutes
- 2026-05-26 PASS 39 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T00:56:48+00:00
```
2026-05-28T00:56:48.9302303Z === RUN   TestAccCluster_MultiRegion
2026-05-28T00:57:24.7074598Z     shared_resource.go:160: 
2026-05-28T00:57:24.7077460Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:57:24.7079384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T00:57:24.7081116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T00:57:24.7083159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T00:57:24.7084875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T00:57:24.7086710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-05-28T00:57:24.7087608Z         	Error:      	Received unexpected error:
2026-05-28T00:57:24.7088507Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T00:57:24.7089128Z         	Test:       	TestAccCluster_MultiRegion
2026-05-28T00:57:24.7090155Z         	Messages:   	Project creation failed: test-acc-tf-p-4262430743871151787, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T00:57:24.7091271Z --- FAIL: TestAccCluster_MultiRegion (35.78s)
```

- 2026-05-29 PASS 45 minutes
- 2026-05-30

### Error 2026-05-30T01:01:01+00:00
```
2026-05-30T01:01:01.6383688Z === RUN   TestAccCluster_MultiRegion
2026-05-30T01:02:12.1312470Z     shared_resource.go:160: 
2026-05-30T01:02:12.1315138Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:12.1319536Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:02:12.1323224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:02:12.1327522Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:02:12.1331154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:02:12.1334915Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-05-30T01:02:12.1336608Z         	Error:      	Received unexpected error:
2026-05-30T01:02:12.1340621Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:12.1342673Z         	Test:       	TestAccCluster_MultiRegion
2026-05-30T01:02:12.1346125Z         	Messages:   	Project creation failed: test-acc-tf-p-8946361653716589064, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:12.1349133Z --- FAIL: TestAccCluster_MultiRegion (70.49s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 38 minutes
- 2026-06-03 PASS 52 minutes
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 41 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 40 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 39 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 39 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 39 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
