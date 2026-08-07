# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-14 00:45](#error-2026-07-14t0045330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.01s
[2026-07-23 00:48](#error-2026-07-23t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a minute
- 2026-07-10 PASS 20 seconds
- 2026-07-11 PASS 31 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 17 seconds
- 2026-07-14

### Error 2026-07-14T00:45:33+00:00
```
2026-07-14T00:45:33.0956076Z === RUN   TestAccCustomDBRoles_Basic
2026-07-14T00:45:33.0956669Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-121925854239720323
2026-07-14T00:45:33.0957455Z     resource_test.go:40: 
2026-07-14T00:45:33.0958425Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:45:33.0961263Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:45:33.0964210Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:45:33.0967054Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-07-14T00:45:33.0969493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-07-14T00:45:33.0970993Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-14T00:45:33.0971810Z         	Error:      	Received unexpected error:
2026-07-14T00:45:33.0974328Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:33.0975838Z         	Test:       	TestAccCustomDBRoles_Basic
2026-07-14T00:45:33.0978671Z         	Messages:   	Project creation failed: test-acc-tf-p-121925854239720323, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:33.0980320Z --- FAIL: TestAccCustomDBRoles_Basic (62.61s)
```

- 2026-07-15 PASS 17 seconds
- 2026-07-16 PASS 26 seconds
- 2026-07-17 PASS 17 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8078622Z === RUN   TestAccCustomDBRoles_Basic
2026-07-18T00:51:48.8079205Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-5130490812174675215
2026-07-18T00:51:48.8079706Z     resource_test.go:40: 
2026-07-18T00:51:48.8080654Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.8082748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.8084661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.8086599Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-07-18T00:51:48.8088560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-07-18T00:51:48.8089798Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:51:48.8090344Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.8092384Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8093679Z         	Test:       	TestAccCustomDBRoles_Basic
2026-07-18T00:51:48.8095669Z         	Messages:   	Project creation failed: test-acc-tf-p-5130490812174675215, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8096892Z --- FAIL: TestAccCustomDBRoles_Basic (63.13s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3954493Z === RUN   TestAccCustomDBRoles_Basic
2026-07-21T00:53:42.3954910Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-3832735880936669968
2026-07-21T00:53:42.3955277Z     resource_test.go:40: 
2026-07-21T00:53:42.3955908Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3957072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3958265Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3959574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-07-21T00:53:42.3960798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-07-21T00:53:42.3961601Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:42.3961997Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3963299Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3964003Z         	Test:       	TestAccCustomDBRoles_Basic
2026-07-21T00:53:42.3965099Z         	Messages:   	Project creation failed: test-acc-tf-p-3832735880936669968, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3965847Z --- FAIL: TestAccCustomDBRoles_Basic (74.11s)
```

- 2026-07-22 PASS 17 seconds
- 2026-07-23

### Error 2026-07-23T00:48:14+00:00
```
2026-07-23T00:48:14.9870026Z === RUN   TestAccCustomDBRoles_Basic
2026-07-23T00:48:14.9870522Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-8578815716776069686
2026-07-23T00:48:14.9871136Z     resource_test.go:40: 
2026-07-23T00:48:14.9871914Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:14.9873373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:14.9874815Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:14.9876280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:50
2026-07-23T00:48:14.9877838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_test.go:40
2026-07-23T00:48:14.9878797Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:48:14.9879234Z         	Error:      	Received unexpected error:
2026-07-23T00:48:14.9880910Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.9881788Z         	Test:       	TestAccCustomDBRoles_Basic
2026-07-23T00:48:14.9883580Z         	Messages:   	Project creation failed: test-acc-tf-p-8578815716776069686, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.9884727Z --- FAIL: TestAccCustomDBRoles_Basic (61.39s)
```

- 2026-07-24 PASS 19 seconds
- 2026-07-25 PASS 18 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 20 seconds
- 2026-07-28 PASS 19 seconds
- 2026-07-29 PASS 16 seconds
- 2026-07-30 PASS 17 seconds
- 2026-07-31 PASS 18 seconds
- 2026-08-01 PASS 18 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 15 seconds
- 2026-08-04 PASS 19 seconds
- 2026-08-05 PASS 15 seconds
- 2026-08-06 PASS 18 seconds
- 2026-08-07 PASS 19 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 16 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 16 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 16 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 16 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 seconds
  - PASS 15 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
