# config/thirdpartyintegration/TestAccThirdPartyIntegration_microsoftTeams Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:03](#error-2026-05-28t0103180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s
[2026-05-30 01:10](#error-2026-05-30t0110400000) |  | dev | 1.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 seconds
  - PASS 8 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09 PASS 31 seconds
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
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 8 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 7 seconds
- 2026-05-28

### Error 2026-05-28T01:03:18+00:00
```
2026-05-28T01:03:18.5139170Z === RUN   TestAccThirdPartyIntegration_microsoftTeams
2026-05-28T01:03:18.5139740Z     resource_test.go:61: Creating execution project (1): test-acc-tf-p-5114067742323946949
2026-05-28T01:03:18.5140222Z     resource_test.go:61: 
2026-05-28T01:03:18.5141305Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:03:18.5143110Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:03:18.5144887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:03:18.5146806Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:313
2026-05-28T01:03:18.5148779Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:61
2026-05-28T01:03:18.5149999Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:03:18.5150499Z         	Error:      	Received unexpected error:
2026-05-28T01:03:18.5153482Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5154907Z         	Test:       	TestAccThirdPartyIntegration_microsoftTeams
2026-05-28T01:03:18.5157248Z         	Messages:   	Project creation failed: test-acc-tf-p-5114067742323946949, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5158937Z --- FAIL: TestAccThirdPartyIntegration_microsoftTeams (0.69s)
```

- 2026-05-29 PASS 9 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.6204435Z === RUN   TestAccThirdPartyIntegration_microsoftTeams
2026-05-30T01:10:40.6206311Z === CONT  TestAccThirdPartyIntegration_microsoftTeams
2026-05-30T01:10:40.6214586Z === NAME  TestAccThirdPartyIntegration_microsoftTeams
2026-05-30T01:10:40.6215155Z     resource_test.go:61: Step 1/3 error: Error running apply: exit status 1
2026-05-30T01:10:40.6215574Z         
2026-05-30T01:10:40.6216006Z         Error: Provider produced inconsistent result after apply
2026-05-30T01:10:40.6216378Z         
2026-05-30T01:10:40.6216909Z         When applying changes to mongodbatlas_third_party_integration.test, provider
2026-05-30T01:10:40.6217825Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-30T01:10:40.6218477Z         unexpected new value: Root object was present, but now absent.
2026-05-30T01:10:40.6218874Z         
2026-05-30T01:10:40.6219378Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-30T01:10:40.6219842Z         issue tracker.
2026-05-30T01:10:40.6220215Z --- FAIL: TestAccThirdPartyIntegration_microsoftTeams (1.22s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02 PASS 8 seconds
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
- 2026-05-17 PASS 9 seconds
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
