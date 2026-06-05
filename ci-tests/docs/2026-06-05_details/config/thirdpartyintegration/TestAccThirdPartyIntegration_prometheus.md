# config/thirdpartyintegration/TestAccThirdPartyIntegration_prometheus Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:09](#error-2026-05-09t0109460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.10s
[2026-05-28 01:03](#error-2026-05-28t0103180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09

### Error 2026-05-09T01:09:46+00:00
```
2026-05-09T01:09:46.7704757Z === RUN   TestAccThirdPartyIntegration_prometheus
2026-05-09T01:09:46.7705188Z     resource_test.go:57: Creating execution project (1): test-acc-tf-p-615499798698903671
2026-05-09T01:09:46.7705546Z     resource_test.go:57: 
2026-05-09T01:09:46.7706208Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:09:46.7707531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:09:46.7708862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:09:46.7710290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:272
2026-05-09T01:09:46.7711762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:57
2026-05-09T01:09:46.7712661Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:09:46.7713047Z         	Error:      	Received unexpected error:
2026-05-09T01:09:46.7714639Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7715518Z         	Test:       	TestAccThirdPartyIntegration_prometheus
2026-05-09T01:09:46.7716836Z         	Messages:   	Project creation failed: test-acc-tf-p-615499798698903671, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7717700Z --- FAIL: TestAccThirdPartyIntegration_prometheus (80.96s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 10 seconds
- 2026-05-16 PASS 7 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19 PASS 8 seconds
- 2026-05-20 PASS 8 seconds
- 2026-05-21 PASS 7 seconds
- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 6 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 7 seconds
- 2026-05-28

### Error 2026-05-28T01:03:18+00:00
```
2026-05-28T01:03:18.5118902Z === RUN   TestAccThirdPartyIntegration_prometheus
2026-05-28T01:03:18.5119463Z     resource_test.go:57: Creating execution project (1): test-acc-tf-p-7472597033141029892
2026-05-28T01:03:18.5119936Z     resource_test.go:57: 
2026-05-28T01:03:18.5120826Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:03:18.5122791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:03:18.5124707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:03:18.5126630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:272
2026-05-28T01:03:18.5128600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:57
2026-05-28T01:03:18.5129801Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:03:18.5130302Z         	Error:      	Received unexpected error:
2026-05-28T01:03:18.5133346Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5134754Z         	Test:       	TestAccThirdPartyIntegration_prometheus
2026-05-28T01:03:18.5137213Z         	Messages:   	Project creation failed: test-acc-tf-p-7472597033141029892, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5138760Z --- FAIL: TestAccThirdPartyIntegration_prometheus (0.23s)
```

- 2026-05-29 PASS 8 seconds
- 2026-05-30 PASS 6 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02 PASS 7 seconds
- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 8 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 10 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
