# config/thirdpartyintegration/TestAccThirdPartyIntegration_opsGenie Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.04s
[2026-07-21 00:54](#error-2026-07-21t0054520000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-07-23 00:52](#error-2026-07-23t0052320000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:37+00:00
```
2026-07-09T01:01:37.7893187Z === RUN   TestAccThirdPartyIntegration_opsGenie
2026-07-09T01:01:37.7894244Z     resource_test.go:45: Creating execution project (1): test-acc-tf-p-8831450252447800486
2026-07-09T01:01:37.7895119Z     resource_test.go:45: 
2026-07-09T01:01:37.7897068Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:37.7900501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:37.7903955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:37.7907861Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:110
2026-07-09T01:01:37.7911693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:45
2026-07-09T01:01:37.7914012Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:01:37.7914945Z         	Error:      	Received unexpected error:
2026-07-09T01:01:37.7920825Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:01:37.7923378Z         	Test:       	TestAccThirdPartyIntegration_opsGenie
2026-07-09T01:01:37.7928186Z         	Messages:   	Project creation failed: test-acc-tf-p-8831450252447800486, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:01:37.7931021Z --- FAIL: TestAccThirdPartyIntegration_opsGenie (0.92s)
```

- 2026-07-10 PASS 8 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6309469Z === RUN   TestAccThirdPartyIntegration_opsGenie
2026-07-11T00:55:51.6310060Z     resource_test.go:45: Creating execution project (1): test-acc-tf-p-7591142861566920388
2026-07-11T00:55:51.6310554Z     resource_test.go:45: 
2026-07-11T00:55:51.6311495Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6313376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6315251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6317406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:110
2026-07-11T00:55:51.6319654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:45
2026-07-11T00:55:51.6320919Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:55:51.6321450Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6323482Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6324565Z         	Test:       	TestAccThirdPartyIntegration_opsGenie
2026-07-11T00:55:51.6326524Z         	Messages:   	Project creation failed: test-acc-tf-p-7591142861566920388, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6327753Z --- FAIL: TestAccThirdPartyIntegration_opsGenie (100.40s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 10 seconds
- 2026-07-18 PASS 27 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:54:52+00:00
```
2026-07-21T00:54:52.7238001Z === RUN   TestAccThirdPartyIntegration_opsGenie
2026-07-21T00:54:52.7238591Z     resource_test.go:45: Creating execution project (1): test-acc-tf-p-2634007444429511783
2026-07-21T00:54:52.7239061Z     resource_test.go:45: 
2026-07-21T00:54:52.7239788Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:54:52.7241075Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:54:52.7242346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:54:52.7243739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:110
2026-07-21T00:54:52.7245213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:45
2026-07-21T00:54:52.7246124Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:54:52.7246593Z         	Error:      	Received unexpected error:
2026-07-21T00:54:52.7249855Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7250855Z         	Test:       	TestAccThirdPartyIntegration_opsGenie
2026-07-21T00:54:52.7252476Z         	Messages:   	Project creation failed: test-acc-tf-p-2634007444429511783, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7253617Z --- FAIL: TestAccThirdPartyIntegration_opsGenie (0.81s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:52:32+00:00
```
2026-07-23T00:52:32.2599446Z === RUN   TestAccThirdPartyIntegration_opsGenie
2026-07-23T00:52:32.2600036Z     resource_test.go:45: Creating execution project (1): test-acc-tf-p-989173799963253444
2026-07-23T00:52:32.2600559Z     resource_test.go:45: 
2026-07-23T00:52:32.2601568Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:52:32.2603042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:52:32.2604583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:52:32.2606198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:110
2026-07-23T00:52:32.2607902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:45
2026-07-23T00:52:32.2608992Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:52:32.2609543Z         	Error:      	Received unexpected error:
2026-07-23T00:52:32.2611941Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2613156Z         	Test:       	TestAccThirdPartyIntegration_opsGenie
2026-07-23T00:52:32.2615089Z         	Messages:   	Project creation failed: test-acc-tf-p-989173799963253444, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2616449Z --- FAIL: TestAccThirdPartyIntegration_opsGenie (0.72s)
```

- 2026-07-24 PASS 8 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 8 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 8 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 10 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 9 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 9 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 10 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 8 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
