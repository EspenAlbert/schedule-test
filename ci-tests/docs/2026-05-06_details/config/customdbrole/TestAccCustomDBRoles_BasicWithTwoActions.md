# config/customdbrole/TestAccCustomDBRoles_BasicWithTwoActions Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:54](#error-2026-04-16t0054080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.09s
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 15 seconds
- 2026-04-08 PASS 12 seconds
- 2026-04-09 PASS 14 seconds
- 2026-04-10 PASS 13 seconds
- 2026-04-11 PASS 14 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 13 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 13 seconds
- 2026-04-16

### Error 2026-04-16T00:54:08+00:00
```
2026-04-16T00:54:08.6221193Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-04-16T00:54:08.6221668Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-6825109455951264453
2026-04-16T00:54:08.6222110Z     resource_test.go:44: 
2026-04-16T00:54:08.6222874Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:54:08.6224475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:54:08.6225969Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:54:08.6227474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-04-16T00:54:08.6229161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-04-16T00:54:08.6230140Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-16T00:54:08.6230543Z         	Error:      	Received unexpected error:
2026-04-16T00:54:08.6232211Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:54:08.6233022Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-04-16T00:54:08.6234564Z         	Messages:   	Project creation failed: test-acc-tf-p-6825109455951264453, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:54:08.6235444Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (70.88s)
```

- 2026-04-17 PASS 14 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 13 seconds
- 2026-04-21 PASS 13 seconds
- 2026-04-22 PASS 13 seconds
- 2026-04-23 PASS 36 seconds
- 2026-04-24 PASS 13 seconds
- 2026-04-25 PASS 14 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 13 seconds
- 2026-04-28 PASS 14 seconds
- 2026-04-29 PASS 14 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.7055627Z === RUN   TestAccCustomDBRoles_BasicWithTwoActions
2026-04-30T01:01:13.7056774Z     resource_test.go:44: Creating execution project (1): test-acc-tf-p-6210793895220363265
2026-04-30T01:01:13.7057772Z     resource_test.go:44: 
2026-04-30T01:01:13.7059676Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:13.7062959Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:13.7079288Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:13.7083195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:96
2026-04-30T01:01:13.7086576Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:44
2026-04-30T01:01:13.7088828Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:01:13.7090009Z         	Error:      	Received unexpected error:
2026-04-30T01:01:13.7093536Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.7095394Z         	Test:       	TestAccCustomDBRoles_BasicWithTwoActions
2026-04-30T01:01:13.7098282Z         	Messages:   	Project creation failed: test-acc-tf-p-6210793895220363265, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.7100675Z --- FAIL: TestAccCustomDBRoles_BasicWithTwoActions (80.32s)
```

- 2026-05-01 PASS 13 seconds
- 2026-05-02 PASS 13 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 13 seconds
- 2026-05-05 PASS 13 seconds
- 2026-05-06 PASS 12 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 13 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 12 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 13 seconds
  - PASS 13 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 13 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 13 seconds
- 2026-05-04 PASS 13 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 14 seconds
