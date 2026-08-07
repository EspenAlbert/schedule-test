# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:46](#error-2026-07-11t0046210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-21 00:46](#error-2026-07-21t0046240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-23 00:47](#error-2026-07-23t0047110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS an hour
- 2026-07-10 PASS an hour
- 2026-07-11

### Error 2026-07-11T00:46:21+00:00
```
2026-07-11T00:46:21.9066732Z === RUN   TestAccSearchDeployment_multiRegion
2026-07-11T00:46:21.9067324Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-1994846384546648202
2026-07-11T00:47:24.0414953Z     resource_test.go:130: 
2026-07-11T00:47:24.0418456Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:47:24.0424224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:47:24.0426658Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:47:24.0428738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:47:24.0430985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:130
2026-07-11T00:47:24.0432668Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:47:24.0433307Z         	Error:      	Received unexpected error:
2026-07-11T00:47:24.0435524Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:24.0436610Z         	Test:       	TestAccSearchDeployment_multiRegion
2026-07-11T00:47:24.0438417Z         	Messages:   	Project creation failed: test-acc-tf-p-1994846384546648202, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:24.0439664Z --- FAIL: TestAccSearchDeployment_multiRegion (62.14s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 48 minutes
- 2026-07-14 PASS 47 minutes
- 2026-07-15 PASS 42 minutes
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS 55 minutes
- 2026-07-18 PASS 34 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:24+00:00
```
2026-07-21T00:46:24.9856301Z === RUN   TestAccSearchDeployment_multiRegion
2026-07-21T00:46:24.9856781Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-3810163342058332490
2026-07-21T00:47:27.0045636Z     resource_test.go:130: 
2026-07-21T00:47:27.0054917Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:27.0056312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:27.0057969Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:47:27.0059282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:47:27.0060845Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:130
2026-07-21T00:47:27.0061807Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:47:27.0062220Z         	Error:      	Received unexpected error:
2026-07-21T00:47:27.0063724Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:27.0064561Z         	Test:       	TestAccSearchDeployment_multiRegion
2026-07-21T00:47:27.0067246Z         	Messages:   	Project creation failed: test-acc-tf-p-3810163342058332490, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:27.0069214Z --- FAIL: TestAccSearchDeployment_multiRegion (62.02s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:47:11+00:00
```
2026-07-23T00:47:11.0849895Z === RUN   TestAccSearchDeployment_multiRegion
2026-07-23T00:47:11.0850511Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-5296922612261264561
2026-07-23T00:48:21.8512681Z     resource_test.go:130: 
2026-07-23T00:48:21.8514735Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:21.8518402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:21.8521290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:21.8524028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:48:21.8526664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:130
2026-07-23T00:48:21.8528194Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:48:21.8528769Z         	Error:      	Received unexpected error:
2026-07-23T00:48:21.8530986Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:21.8532265Z         	Test:       	TestAccSearchDeployment_multiRegion
2026-07-23T00:48:21.8534265Z         	Messages:   	Project creation failed: test-acc-tf-p-5296922612261264561, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:21.8535609Z --- FAIL: TestAccSearchDeployment_multiRegion (70.77s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 44 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 54 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 32 minutes
- 2026-08-01 PASS 29 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 29 minutes
- 2026-08-04 PASS 29 minutes
- 2026-08-05 PASS 46 minutes
- 2026-08-06 PASS 30 minutes
- 2026-08-07 PASS 35 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 40 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 40 minutes
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
- 2026-07-26 PASS 38 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 29 minutes
  - PASS 33 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 28 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
