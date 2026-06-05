# network/networkcontainer/TestAccNetworkContainer_basicAWS Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:08](#error-2026-05-19t0108530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.00s
[2026-06-02 01:13](#error-2026-06-02t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 minutes
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
2026-05-19T01:08:53.2905230Z === RUN   TestAccNetworkContainer_basicAWS
2026-05-19T01:08:53.2910180Z     resource_network_container_test.go:24: Creating execution project (1): test-acc-tf-p-5473364053255594857
2026-05-19T01:08:53.2911158Z     resource_network_container_test.go:24: 
2026-05-19T01:08:53.2912214Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:53.2914140Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:53.2916008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:53.2919083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:24
2026-05-19T01:08:53.2920019Z         	Error:      	Received unexpected error:
2026-05-19T01:08:53.2921992Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.2923091Z         	Test:       	TestAccNetworkContainer_basicAWS
2026-05-19T01:08:53.2924868Z         	Messages:   	Project creation failed: test-acc-tf-p-5473364053255594857, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.2926381Z --- FAIL: TestAccNetworkContainer_basicAWS (64.01s)
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
2026-06-02T01:13:23.3268328Z === RUN   TestAccNetworkContainer_basicAWS
2026-06-02T01:13:23.3269650Z     resource_network_container_test.go:24: Creating execution project (1): test-acc-tf-p-2336786161057200184
2026-06-02T01:13:23.3270624Z     resource_network_container_test.go:24: 
2026-06-02T01:13:23.3272172Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:13:23.3274379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:13:23.3276248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:13:23.3278346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:24
2026-06-02T01:13:23.3279292Z         	Error:      	Received unexpected error:
2026-06-02T01:13:23.3281336Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3282426Z         	Test:       	TestAccNetworkContainer_basicAWS
2026-06-02T01:13:23.3284484Z         	Messages:   	Project creation failed: test-acc-tf-p-2336786161057200184, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3285708Z --- FAIL: TestAccNetworkContainer_basicAWS (61.41s)
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
