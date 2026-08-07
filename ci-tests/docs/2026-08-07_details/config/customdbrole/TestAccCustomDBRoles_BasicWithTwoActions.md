# config/customdbrole/TestAccCustomDBRoles_BasicWithTwoActions Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.04s
[2026-07-23 00:48](#error-2026-07-23t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 21 seconds
- 2026-07-10 PASS 13 seconds
- 2026-07-11 PASS 15 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 13 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 15 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8097291Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-07-18T00:51:48.8097908Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-8950145695138839493
2026-07-18T00:51:48.8098417Z     resource_test.go:44: 
2026-07-18T00:51:48.8099367Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.8101255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.8103431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.8105378Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-07-18T00:51:48.8107327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-07-18T00:51:48.8108600Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:51:48.8109146Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.8111178Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8112631Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-07-18T00:51:48.8114501Z         	Messages:   	Project creation failed: test-acc-tf-p-8950145695138839493, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8115736Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (65.39s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 2 minutes
- 2026-07-22 PASS 13 seconds
- 2026-07-23

### Error 2026-07-23T00:48:14+00:00
```
2026-07-23T00:48:14.9885229Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-07-23T00:48:14.9885884Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-2191579779409967283
2026-07-23T00:48:14.9886419Z     resource_test.go:44: 
2026-07-23T00:48:14.9887689Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:14.9889318Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:14.9891380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:14.9893343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-07-23T00:48:14.9895204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-07-23T00:48:14.9896571Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:48:14.9897307Z         	Error:      	Received unexpected error:
2026-07-23T00:48:14.9899212Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.9900274Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-07-23T00:48:14.9902044Z         	Messages:   	Project creation failed: test-acc-tf-p-2191579779409967283, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.9903155Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (61.61s)
```

- 2026-07-24 PASS 13 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 14 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 12 seconds
- 2026-07-30 PASS 11 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 12 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 12 seconds
- 2026-08-04 PASS 12 seconds
- 2026-08-05 PASS 12 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 13 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 12 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 13 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
