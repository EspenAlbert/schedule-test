# network/networkcontainer/TestAccNetworkContainer_withRegionsGCP Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:08](#error-2026-05-19t0108530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.07s
[2026-06-02 01:13](#error-2026-06-02t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-05-08 PASS 2 minutes
- 2026-05-09 PASS 2 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 2 minutes
- 2026-05-12 PASS 2 minutes
- 2026-05-13 PASS 2 minutes
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS 2 minutes
- 2026-05-16 PASS 2 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 2 minutes
- 2026-05-19

### Error 2026-05-19T01:08:53+00:00
```
2026-05-19T01:08:53.2959881Z === RUN   TestAccNetworkContainer_withRegionsGCP
2026-05-19T01:08:53.2960588Z     resource_network_container_test.go:109: Creating execution project (1): test-acc-tf-p-5207409894255500729
2026-05-19T01:08:53.2961212Z     resource_network_container_test.go:109: 
2026-05-19T01:08:53.2962192Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:53.2964014Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:53.2966311Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:53.2968475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:109
2026-05-19T01:08:53.2969386Z         	Error:      	Received unexpected error:
2026-05-19T01:08:53.2971338Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.2972455Z         	Test:       	TestAccNetworkContainer_withRegionsGCP
2026-05-19T01:08:53.2974422Z         	Messages:   	Project creation failed: test-acc-tf-p-5207409894255500729, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.2975707Z --- FAIL: TestAccNetworkContainer_withRegionsGCP (104.68s)
```

- 2026-05-20 PASS 2 minutes
- 2026-05-21 PASS 2 minutes
- 2026-05-22 PASS 2 minutes
- 2026-05-23 PASS 2 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 minutes
- 2026-05-26 PASS 2 minutes
- 2026-05-27 PASS 2 minutes
- 2026-05-28 PASS 2 minutes
- 2026-05-29 PASS 2 minutes
- 2026-05-30 PASS 2 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 2 minutes
- 2026-06-02

### Error 2026-06-02T01:13:23+00:00
```
2026-06-02T01:13:23.3318821Z === RUN   TestAccNetworkContainer_withRegionsGCP
2026-06-02T01:13:23.3319559Z     resource_network_container_test.go:109: Creating execution project (1): test-acc-tf-p-813159674657224097
2026-06-02T01:13:23.3320202Z     resource_network_container_test.go:109: 
2026-06-02T01:13:23.3321198Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:13:23.3323063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:13:23.3325272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:13:23.3327386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:109
2026-06-02T01:13:23.3328306Z         	Error:      	Received unexpected error:
2026-06-02T01:13:23.3330280Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3331353Z         	Test:       	TestAccNetworkContainer_withRegionsGCP
2026-06-02T01:13:23.3333270Z         	Messages:   	Project creation failed: test-acc-tf-p-813159674657224097, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3334608Z --- FAIL: TestAccNetworkContainer_withRegionsGCP (91.22s)
```

- 2026-06-03 PASS 2 minutes
- 2026-06-04 PASS 2 minutes
- 2026-06-05 PASS 2 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
