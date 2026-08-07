# project/projectipaccesslist/TestAccProjectIPAccessList_importIncorrectId Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.01s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.03s
[2026-07-21 00:50](#error-2026-07-21t0050320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-07-23 00:48](#error-2026-07-23t0048460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8899789Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2026-07-09T01:01:39.8900565Z     resource_project_ip_access_list_test.go:165: Creating execution project (1): test-acc-tf-p-1296073769445316245
2026-07-09T01:01:39.8901201Z     resource_project_ip_access_list_test.go:165: 
2026-07-09T01:01:39.8902201Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:39.8904217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:39.8906084Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:39.8908287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:165
2026-07-09T01:01:39.8909213Z         	Error:      	Received unexpected error:
2026-07-09T01:01:39.8911224Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8912351Z         	Test:       	TestAccProjectIPAccessList_importIncorrectId
2026-07-09T01:01:39.8914426Z         	Messages:   	Project creation failed: test-acc-tf-p-1296073769445316245, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8915703Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (83.11s)
```

- 2026-07-10 PASS 13 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5865720Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2026-07-11T00:54:38.5866450Z     resource_project_ip_access_list_test.go:165: Creating execution project (1): test-acc-tf-p-8268696937177671107
2026-07-11T00:54:38.5867092Z     resource_project_ip_access_list_test.go:165: 
2026-07-11T00:54:38.5868245Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:38.5870104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:38.5871953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:38.5874274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:165
2026-07-11T00:54:38.5875216Z         	Error:      	Received unexpected error:
2026-07-11T00:54:38.5877212Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5878469Z         	Test:       	TestAccProjectIPAccessList_importIncorrectId
2026-07-11T00:54:38.5880304Z         	Messages:   	Project creation failed: test-acc-tf-p-8268696937177671107, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5881566Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (82.26s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 13 seconds
- 2026-07-14 PASS 14 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 15 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:50:32+00:00
```
2026-07-21T00:50:32.6266258Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2026-07-21T00:50:32.6267582Z     resource_project_ip_access_list_test.go:165: Creating execution project (1): test-acc-tf-p-6921926560774270186
2026-07-21T00:50:32.6268266Z     resource_project_ip_access_list_test.go:165: 
2026-07-21T00:50:32.6270365Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:50:32.6273476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:50:32.6277437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:50:32.6280691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:165
2026-07-21T00:50:32.6282412Z         	Error:      	Received unexpected error:
2026-07-21T00:50:32.6285732Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:32.6287575Z         	Test:       	TestAccProjectIPAccessList_importIncorrectId
2026-07-21T00:50:32.6290970Z         	Messages:   	Project creation failed: test-acc-tf-p-6921926560774270186, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:32.6292647Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (62.95s)
```

- 2026-07-22 PASS 13 seconds
- 2026-07-23

### Error 2026-07-23T00:48:46+00:00
```
2026-07-23T00:48:46.3635041Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2026-07-23T00:48:46.3635768Z     resource_project_ip_access_list_test.go:165: Creating execution project (1): test-acc-tf-p-7113884581357689256
2026-07-23T00:48:46.3636414Z     resource_project_ip_access_list_test.go:165: 
2026-07-23T00:48:46.3637396Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:46.3639172Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:46.3641188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:46.3643452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:165
2026-07-23T00:48:46.3644368Z         	Error:      	Received unexpected error:
2026-07-23T00:48:46.3647183Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:46.3648578Z         	Test:       	TestAccProjectIPAccessList_importIncorrectId
2026-07-23T00:48:46.3651203Z         	Messages:   	Project creation failed: test-acc-tf-p-7113884581357689256, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:46.3652701Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (0.64s)
```

- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 16 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 12 seconds
- 2026-07-30 PASS 12 seconds
- 2026-07-31
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 12 seconds
- 2026-08-01 PASS 14 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 12 seconds
  - PASS 12 seconds
- 2026-08-04 PASS 12 seconds
- 2026-08-05 PASS 11 seconds
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
- 2026-07-15
  - PASS 12 seconds
  - PASS 12 seconds
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
- 2026-07-26 PASS 12 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 12 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
