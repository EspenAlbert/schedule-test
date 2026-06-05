# config/thirdpartyintegration/TestAccThirdPartyIntegration_datadog Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:09](#error-2026-05-09t0109460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.04s
[2026-05-28 01:03](#error-2026-05-28t0103180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 10 seconds
  - PASS 14 seconds
- 2026-05-08 PASS 13 seconds
- 2026-05-09

### Error 2026-05-09T01:09:46+00:00
```
2026-05-09T01:09:46.7691226Z === RUN   TestAccThirdPartyIntegration_datadog
2026-05-09T01:09:46.7691650Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-4815976708701579988
2026-05-09T01:09:46.7692009Z     resource_test.go:53: 
2026-05-09T01:09:46.7692687Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:09:46.7694240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:09:46.7695582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:09:46.7697028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:185
2026-05-09T01:09:46.7698511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:53
2026-05-09T01:09:46.7699519Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:09:46.7699920Z         	Error:      	Received unexpected error:
2026-05-09T01:09:46.7701386Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7702145Z         	Test:       	TestAccThirdPartyIntegration_datadog
2026-05-09T01:09:46.7703596Z         	Messages:   	Project creation failed: test-acc-tf-p-4815976708701579988, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7704459Z --- FAIL: TestAccThirdPartyIntegration_datadog (85.39s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 13 seconds
- 2026-05-12 PASS 13 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS 11 seconds
- 2026-05-15 PASS 14 seconds
- 2026-05-16 PASS 11 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 14 seconds
- 2026-05-19 PASS 13 seconds
- 2026-05-20 PASS 13 seconds
- 2026-05-21 PASS 12 seconds
- 2026-05-22 PASS 13 seconds
- 2026-05-23 PASS 11 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26 PASS 13 seconds
- 2026-05-27 PASS 12 seconds
- 2026-05-28

### Error 2026-05-28T01:03:18+00:00
```
2026-05-28T01:03:18.5098820Z === RUN   TestAccThirdPartyIntegration_datadog
2026-05-28T01:03:18.5099506Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-6606724356339337774
2026-05-28T01:03:18.5099983Z     resource_test.go:53: 
2026-05-28T01:03:18.5101044Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:03:18.5102885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:03:18.5104666Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:03:18.5106596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:185
2026-05-28T01:03:18.5108568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:53
2026-05-28T01:03:18.5109770Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:03:18.5110273Z         	Error:      	Received unexpected error:
2026-05-28T01:03:18.5113263Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5114646Z         	Test:       	TestAccThirdPartyIntegration_datadog
2026-05-28T01:03:18.5116977Z         	Messages:   	Project creation failed: test-acc-tf-p-6606724356339337774, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5118511Z --- FAIL: TestAccThirdPartyIntegration_datadog (0.61s)
```

- 2026-05-29 PASS 13 seconds
- 2026-05-30 PASS 11 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02 PASS 13 seconds
- 2026-06-03 PASS 15 seconds
- 2026-06-04 PASS 14 seconds
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 13 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 14 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 12 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 12 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
