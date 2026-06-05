# project/projectipaccesslist/TestAccProjectIPAccessList_importIncorrectId Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-26 02:14](#error-2026-05-26t0214000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-05-28 01:01](#error-2026-05-28t0101570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.05s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev | flaky_client | 5.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 13 seconds
  - PASS 13 seconds
- 2026-05-08 PASS 15 seconds
- 2026-05-09 PASS 16 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 12 seconds
- 2026-05-12 PASS 13 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS 13 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16 PASS 32 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19 PASS 14 seconds
- 2026-05-20 PASS 12 seconds
- 2026-05-21 PASS 13 seconds
- 2026-05-22 PASS 12 seconds
- 2026-05-23 PASS 14 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 12 seconds
- 2026-05-26

### Error 2026-05-26T02:14:00+00:00
```
2026-05-26T02:14:00.7639246Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2026-05-26T02:14:00.7639934Z     resource_project_ip_access_list_test.go:165: Creating execution project (1): test-acc-tf-p-3571126499264294410
2026-05-26T02:14:00.7640536Z     resource_project_ip_access_list_test.go:165: 
2026-05-26T02:14:00.7641487Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:00.7643293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:00.7645087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:00.7647217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:165
2026-05-26T02:14:00.7648352Z         	Error:      	Received unexpected error:
2026-05-26T02:14:00.7650291Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:00.7651522Z         	Test:       	TestAccProjectIPAccessList_importIncorrectId
2026-05-26T02:14:00.7654382Z         	Messages:   	Project creation failed: test-acc-tf-p-3571126499264294410, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:00.7656684Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (61.95s)
```

- 2026-05-27 PASS 12 seconds
- 2026-05-28

### Error 2026-05-28T01:01:57+00:00
```
2026-05-28T01:01:57.5482947Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2026-05-28T01:01:57.5483647Z     resource_project_ip_access_list_test.go:165: Creating execution project (1): test-acc-tf-p-4427532569144034800
2026-05-28T01:01:57.5484267Z     resource_project_ip_access_list_test.go:165: 
2026-05-28T01:01:57.5485236Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:57.5487208Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:57.5489000Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:57.5491123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:165
2026-05-28T01:01:57.5492029Z         	Error:      	Received unexpected error:
2026-05-28T01:01:57.5494820Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:57.5496256Z         	Test:       	TestAccProjectIPAccessList_importIncorrectId
2026-05-28T01:01:57.5498821Z         	Messages:   	Project creation failed: test-acc-tf-p-4427532569144034800, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:57.5500381Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (0.48s)
```

- 2026-05-29 PASS 12 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2986747Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2026-06-02T01:12:19.2987657Z     resource_project_ip_access_list_test.go:165: Creating execution project (1): test-acc-tf-p-5967481979229039121
2026-06-02T01:12:19.2988312Z     resource_project_ip_access_list_test.go:165: 
2026-06-02T01:12:19.2989285Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:12:19.2991215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:12:19.2993064Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:12:19.2995154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:165
2026-06-02T01:12:19.2996084Z         	Error:      	Received unexpected error:
2026-06-02T01:12:19.2997138Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.231.133.249:443: i/o timeout
2026-06-02T01:12:19.2997864Z         	Test:       	TestAccProjectIPAccessList_importIncorrectId
2026-06-02T01:12:19.2999049Z         	Messages:   	Project creation failed: test-acc-tf-p-5967481979229039121, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.231.133.249:443: i/o timeout
2026-06-02T01:12:19.2999883Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (5.00s)
```

- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 12 seconds
- 2026-06-05 PASS 12 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 12 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 13 seconds
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
- 2026-05-31 PASS 13 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
