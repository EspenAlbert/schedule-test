# config/databaseuser/TestAccDatabaseUser_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.06s
[2026-05-21 01:09](#error-2026-05-21t0109260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-05-23 01:05](#error-2026-05-23t0105110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.10s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 9 seconds
  - PASS 8 seconds
- 2026-05-08 PASS 24 seconds
- 2026-05-09

### Error 2026-05-09T01:02:11+00:00
```
2026-05-09T01:02:11.9189845Z === RUN   TestAccDatabaseUser_basic
2026-05-09T01:02:11.9190564Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-6356395217398615843
2026-05-09T01:02:11.9191248Z     resource_database_user_test.go:44: 
2026-05-09T01:02:11.9192427Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:02:11.9194916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:02:11.9197177Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:02:11.9199728Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-05-09T01:02:11.9200783Z         	Error:      	Received unexpected error:
2026-05-09T01:02:11.9203502Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9204774Z         	Test:       	TestAccDatabaseUser_basic
2026-05-09T01:02:11.9207009Z         	Messages:   	Project creation failed: test-acc-tf-p-6356395217398615843, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:11.9208398Z --- FAIL: TestAccDatabaseUser_basic (65.76s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 20 seconds
- 2026-05-12 PASS 10 seconds
- 2026-05-13 PASS 18 seconds
- 2026-05-14 PASS 8 seconds
- 2026-05-15 PASS 18 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5780409Z === RUN   TestAccDatabaseUser_basic
2026-05-16T01:00:42.5781019Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-4098750393758062399
2026-05-16T01:00:42.5781568Z     resource_database_user_test.go:44: 
2026-05-16T01:00:42.5782505Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:42.5784330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:42.5786272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:42.5788261Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-05-16T01:00:42.5789094Z         	Error:      	Received unexpected error:
2026-05-16T01:00:42.5791173Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5792170Z         	Test:       	TestAccDatabaseUser_basic
2026-05-16T01:00:42.5793924Z         	Messages:   	Project creation failed: test-acc-tf-p-4098750393758062399, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5795088Z --- FAIL: TestAccDatabaseUser_basic (80.64s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 17 seconds
- 2026-05-19 PASS 15 seconds
- 2026-05-20 PASS 21 seconds
- 2026-05-21

### Error 2026-05-21T01:09:26+00:00
```
2026-05-21T01:09:26.8440628Z === RUN   TestAccDatabaseUser_basic
2026-05-21T01:09:26.8441261Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-4211156107393827866
2026-05-21T01:09:26.8441826Z     resource_database_user_test.go:44: 
2026-05-21T01:09:26.8442770Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:26.8444583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:26.8446405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:26.8448417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-05-21T01:09:26.8449266Z         	Error:      	Received unexpected error:
2026-05-21T01:09:26.8451498Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:26.8452504Z         	Test:       	TestAccDatabaseUser_basic
2026-05-21T01:09:26.8454252Z         	Messages:   	Project creation failed: test-acc-tf-p-4211156107393827866, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:26.8455408Z --- FAIL: TestAccDatabaseUser_basic (63.27s)
```

- 2026-05-22 PASS 17 seconds
- 2026-05-23

### Error 2026-05-23T01:05:11+00:00
```
2026-05-23T01:05:11.5632528Z === RUN   TestAccDatabaseUser_basic
2026-05-23T01:05:11.5633231Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-4721222543183968657
2026-05-23T01:05:11.5633683Z     resource_database_user_test.go:44: 
2026-05-23T01:05:11.5634411Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:11.5635743Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:11.5637075Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:11.5638557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-05-23T01:05:11.5639204Z         	Error:      	Received unexpected error:
2026-05-23T01:05:11.5640851Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:11.5641592Z         	Test:       	TestAccDatabaseUser_basic
2026-05-23T01:05:11.5642895Z         	Messages:   	Project creation failed: test-acc-tf-p-4721222543183968657, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:11.5643733Z --- FAIL: TestAccDatabaseUser_basic (76.99s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 17 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0282472Z === RUN   TestAccDatabaseUser_basic
2026-05-26T02:14:46.0283346Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-774793367984627647
2026-05-26T02:14:46.0283926Z     resource_database_user_test.go:44: 
2026-05-26T02:14:46.0284859Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:46.0286654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:46.0288423Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:46.0290638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-05-26T02:14:46.0291460Z         	Error:      	Received unexpected error:
2026-05-26T02:14:46.0293643Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0294637Z         	Test:       	TestAccDatabaseUser_basic
2026-05-26T02:14:46.0296387Z         	Messages:   	Project creation failed: test-acc-tf-p-774793367984627647, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0297556Z --- FAIL: TestAccDatabaseUser_basic (63.56s)
```

- 2026-05-27 PASS 27 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6089336Z === RUN   TestAccDatabaseUser_basic
2026-05-28T01:02:57.6089945Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-1723380801251059193
2026-05-28T01:02:57.6090516Z     resource_database_user_test.go:44: 
2026-05-28T01:02:57.6091709Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6093504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6095292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6097240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-05-28T01:02:57.6098306Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6101421Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6102803Z         	Test:       	TestAccDatabaseUser_basic
2026-05-28T01:02:57.6105117Z         	Messages:   	Project creation failed: test-acc-tf-p-1723380801251059193, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6106626Z --- FAIL: TestAccDatabaseUser_basic (0.63s)
```

- 2026-05-29 PASS 25 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0309910Z === RUN   TestAccDatabaseUser_basic
2026-05-30T01:08:14.0310557Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-6502984637883219366
2026-05-30T01:08:14.0311137Z     resource_database_user_test.go:44: 
2026-05-30T01:08:14.0312245Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:14.0314041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:14.0315821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:14.0317884Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-05-30T01:08:14.0318740Z         	Error:      	Received unexpected error:
2026-05-30T01:08:14.0320702Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0321694Z         	Test:       	TestAccDatabaseUser_basic
2026-05-30T01:08:14.0323557Z         	Messages:   	Project creation failed: test-acc-tf-p-6502984637883219366, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0324678Z --- FAIL: TestAccDatabaseUser_basic (99.14s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 19 seconds
- 2026-06-02 PASS 15 seconds
- 2026-06-03 PASS 27 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 11 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 24 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 26 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 26 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
