# config/teamprojectassignment/TestAccTeamProjectAssignment_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.01s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-07-16 00:49](#error-2026-07-16t0049140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.10s
[2026-07-18 00:51](#error-2026-07-18t0051550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-07-21 00:54](#error-2026-07-21t0054520000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-07-23 00:52](#error-2026-07-23t0052320000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:37+00:00
```
2026-07-09T01:01:37.7816880Z === RUN   TestAccTeamProjectAssignment_basic
2026-07-09T01:01:37.7817966Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-7721372270880307004
2026-07-09T01:01:37.7818855Z     resource_test.go:19: 
2026-07-09T01:01:37.7820556Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:37.7826074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:37.7829564Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:37.7833249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-07-09T01:01:37.7837388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-07-09T01:01:37.7839721Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:01:37.7840656Z         	Error:      	Received unexpected error:
2026-07-09T01:01:37.7844452Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:37.7846570Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-07-09T01:01:37.7849874Z         	Messages:   	Project creation failed: test-acc-tf-p-7721372270880307004, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:37.7852294Z --- FAIL: TestAccTeamProjectAssignment_basic (88.06s)
```

- 2026-07-10 PASS 8 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6270765Z === RUN   TestAccTeamProjectAssignment_basic
2026-07-11T00:55:51.6271350Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-5653010239337247787
2026-07-11T00:55:51.6271847Z     resource_test.go:19: 
2026-07-11T00:55:51.6272777Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6274651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6276543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6278695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-07-11T00:55:51.6281008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-07-11T00:55:51.6282421Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:55:51.6282958Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6284985Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6286059Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-07-11T00:55:51.6287876Z         	Messages:   	Project creation failed: test-acc-tf-p-5653010239337247787, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6289383Z --- FAIL: TestAccTeamProjectAssignment_basic (62.79s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 18 seconds
- 2026-07-15 PASS 7 seconds
- 2026-07-16

### Error 2026-07-16T00:49:14+00:00
```
2026-07-16T00:49:14.1230923Z === RUN   TestAccTeamProjectAssignment_basic
2026-07-16T00:49:14.1231693Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-5960262739162891110
2026-07-16T00:49:14.1232192Z     resource_test.go:19: 
2026-07-16T00:49:14.1233110Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:14.1234912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:14.1236689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:14.1238756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-07-16T00:49:14.1240698Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-07-16T00:49:14.1242079Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T00:49:14.1242623Z         	Error:      	Received unexpected error:
2026-07-16T00:49:14.1244764Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:14.1245799Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-07-16T00:49:14.1247526Z         	Messages:   	Project creation failed: test-acc-tf-p-5960262739162891110, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:14.1248658Z --- FAIL: TestAccTeamProjectAssignment_basic (83.97s)
```

- 2026-07-17 PASS 6 seconds
- 2026-07-18

### Error 2026-07-18T00:51:55+00:00
```
2026-07-18T00:51:55.3349204Z === RUN   TestAccTeamProjectAssignment_basic
2026-07-18T00:51:55.3349818Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-1901244856317454069
2026-07-18T00:51:55.3350337Z     resource_test.go:19: 
2026-07-18T00:51:55.3351295Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:55.3353551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:55.3355790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:55.3358295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-07-18T00:51:55.3360744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-07-18T00:51:55.3362181Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:51:55.3363035Z         	Error:      	Received unexpected error:
2026-07-18T00:51:55.3365456Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3366710Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-07-18T00:51:55.3368859Z         	Messages:   	Project creation failed: test-acc-tf-p-1901244856317454069, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3370261Z --- FAIL: TestAccTeamProjectAssignment_basic (63.56s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:54:52+00:00
```
2026-07-21T00:54:52.7208118Z === RUN   TestAccTeamProjectAssignment_basic
2026-07-21T00:54:52.7208763Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-4569356881853752461
2026-07-21T00:54:52.7209219Z     resource_test.go:19: 
2026-07-21T00:54:52.7209879Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:54:52.7211152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:54:52.7212390Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:54:52.7213752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-07-21T00:54:52.7215097Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-07-21T00:54:52.7216012Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:54:52.7216443Z         	Error:      	Received unexpected error:
2026-07-21T00:54:52.7218461Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7219585Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-07-21T00:54:52.7221204Z         	Messages:   	Project creation failed: test-acc-tf-p-4569356881853752461, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7222260Z --- FAIL: TestAccTeamProjectAssignment_basic (0.42s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:52:32+00:00
```
2026-07-23T00:52:32.2562250Z === RUN   TestAccTeamProjectAssignment_basic
2026-07-23T00:52:32.2562946Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-6673084746277100968
2026-07-23T00:52:32.2563508Z     resource_test.go:19: 
2026-07-23T00:52:32.2564458Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:52:32.2565991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:52:32.2567469Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:52:32.2569105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-07-23T00:52:32.2570703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-07-23T00:52:32.2572027Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:52:32.2572567Z         	Error:      	Received unexpected error:
2026-07-23T00:52:32.2574851Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2576105Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-07-23T00:52:32.2577975Z         	Messages:   	Project creation failed: test-acc-tf-p-6673084746277100968, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2579244Z --- FAIL: TestAccTeamProjectAssignment_basic (0.84s)
```

- 2026-07-24 PASS 9 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 8 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 9 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 6 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 5 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 8 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
