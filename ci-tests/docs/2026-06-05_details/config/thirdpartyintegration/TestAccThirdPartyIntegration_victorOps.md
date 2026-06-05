# config/thirdpartyintegration/TestAccThirdPartyIntegration_victorOps Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:09](#error-2026-05-09t0109460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-05-28 01:03](#error-2026-05-28t0103180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09

### Error 2026-05-09T01:09:46+00:00
```
2026-05-09T01:09:46.7677760Z === RUN   TestAccThirdPartyIntegration_victorOps
2026-05-09T01:09:46.7678212Z     resource_test.go:49: Creating execution project (1): test-acc-tf-p-4598147594892342366
2026-05-09T01:09:46.7678580Z     resource_test.go:49: 
2026-05-09T01:09:46.7679280Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:09:46.7680614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:09:46.7681950Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:09:46.7683525Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:148
2026-05-09T01:09:46.7685020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:49
2026-05-09T01:09:46.7685930Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:09:46.7686398Z         	Error:      	Received unexpected error:
2026-05-09T01:09:46.7687872Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7688639Z         	Test:       	TestAccThirdPartyIntegration_victorOps
2026-05-09T01:09:46.7689945Z         	Messages:   	Project creation failed: test-acc-tf-p-4598147594892342366, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7690925Z --- FAIL: TestAccThirdPartyIntegration_victorOps (63.38s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16 PASS 6 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19 PASS 8 seconds
- 2026-05-20 PASS 8 seconds
- 2026-05-21 PASS 7 seconds
- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 7 seconds
- 2026-05-28

### Error 2026-05-28T01:03:18+00:00
```
2026-05-28T01:03:18.5078655Z === RUN   TestAccThirdPartyIntegration_victorOps
2026-05-28T01:03:18.5079221Z     resource_test.go:49: Creating execution project (1): test-acc-tf-p-6682668865701024806
2026-05-28T01:03:18.5079696Z     resource_test.go:49: 
2026-05-28T01:03:18.5080588Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:03:18.5082571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:03:18.5084358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:03:18.5086276Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:148
2026-05-28T01:03:18.5088253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:49
2026-05-28T01:03:18.5089587Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:03:18.5090090Z         	Error:      	Received unexpected error:
2026-05-28T01:03:18.5093148Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5094553Z         	Test:       	TestAccThirdPartyIntegration_victorOps
2026-05-28T01:03:18.5096885Z         	Messages:   	Project creation failed: test-acc-tf-p-6682668865701024806, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5098437Z --- FAIL: TestAccThirdPartyIntegration_victorOps (0.79s)
```

- 2026-05-29 PASS 8 seconds
- 2026-05-30 PASS 32 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02 PASS 47 seconds
- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 9 seconds
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
