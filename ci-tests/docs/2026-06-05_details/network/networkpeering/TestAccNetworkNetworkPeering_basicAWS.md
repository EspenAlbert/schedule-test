# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 01:02](#error-2026-05-07t0102010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.08s
[2026-05-09 01:03](#error-2026-05-09t0103400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-05-16 01:01](#error-2026-05-16t0101160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s
[2026-05-21 01:09](#error-2026-05-21t0109200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s
[2026-05-23 01:05](#error-2026-05-23t0105240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.04s
[2026-05-26 02:14](#error-2026-05-26t0214440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.04s
[2026-05-28 01:03](#error-2026-05-28t0103330000) |  | dev | flaky_500 | 37.04s
[2026-06-02 01:13](#error-2026-06-02t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T01:02:01+00:00
```
2026-05-07T01:02:01.1100239Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-05-07T01:02:01.1106681Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-05-07T01:02:01.1125254Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-05-07T01:02:01.1125770Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-07T01:02:01.1126179Z         
2026-05-07T01:02:01.1126622Z         Error: error creating project: test-acc-tf-p-7928774369428737471
2026-05-07T01:02:01.1127001Z         
2026-05-07T01:02:01.1127350Z           with mongodbatlas_project.my_project,
2026-05-07T01:02:01.1127995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-07T01:02:01.1128599Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-07T01:02:01.1128942Z         
2026-05-07T01:02:01.1129414Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-07T01:02:01.1130041Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-07T01:02:01.1130627Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T01:02:01.1131082Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (74.75s)
```

  - PASS 2 minutes
- 2026-05-08 PASS 3 minutes
- 2026-05-09

### Error 2026-05-09T01:03:40+00:00
```
2026-05-09T01:03:40.8331124Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-05-09T01:03:40.8363887Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-05-09T01:03:40.8380932Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-05-09T01:03:40.8381633Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-09T01:03:40.8382178Z         
2026-05-09T01:03:40.8382812Z         Error: error creating project: test-acc-tf-p-5709146490254802126
2026-05-09T01:03:40.8383361Z         
2026-05-09T01:03:40.8383888Z           with mongodbatlas_project.my_project,
2026-05-09T01:03:40.8384731Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-09T01:03:40.8385530Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-09T01:03:40.8386059Z         
2026-05-09T01:03:40.8386723Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:03:40.8387717Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:03:40.8388527Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:03:40.8389309Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (63.14s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 2 minutes
- 2026-05-12 PASS 4 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 3 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16

### Error 2026-05-16T01:01:16+00:00
```
2026-05-16T01:01:16.0177219Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-05-16T01:01:16.0185026Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-05-16T01:01:16.0209596Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-05-16T01:01:16.0210181Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-16T01:01:16.0210606Z         
2026-05-16T01:01:16.0211076Z         Error: error creating project: test-acc-tf-p-7591400994422831536
2026-05-16T01:01:16.0211478Z         
2026-05-16T01:01:16.0211844Z           with mongodbatlas_project.my_project,
2026-05-16T01:01:16.0212565Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-16T01:01:16.0213246Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-16T01:01:16.0213595Z         
2026-05-16T01:01:16.0214104Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:01:16.0214804Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:01:16.0215442Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:01:16.0215947Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (69.67s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 2 minutes
- 2026-05-19 PASS 3 minutes
- 2026-05-20 PASS 2 minutes
- 2026-05-21

### Error 2026-05-21T01:09:20+00:00
```
2026-05-21T01:09:20.3272588Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-05-21T01:09:20.3279209Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-05-21T01:09:20.3312560Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-05-21T01:09:20.3313111Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-21T01:09:20.3313517Z         
2026-05-21T01:09:20.3313981Z         Error: error creating project: test-acc-tf-p-4280348858703959414
2026-05-21T01:09:20.3314382Z         
2026-05-21T01:09:20.3314750Z           with mongodbatlas_project.my_project,
2026-05-21T01:09:20.3315454Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-21T01:09:20.3316111Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-21T01:09:20.3316463Z         
2026-05-21T01:09:20.3317214Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:09:20.3317904Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:09:20.3318536Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:20.3319016Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (68.44s)
```

- 2026-05-22 PASS 3 minutes
- 2026-05-23

### Error 2026-05-23T01:05:24+00:00
```
2026-05-23T01:05:24.4078000Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-05-23T01:05:24.4085798Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-05-23T01:05:24.4143993Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-05-23T01:05:24.4144818Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-23T01:05:24.4145372Z         
2026-05-23T01:05:24.4145905Z         Error: error creating project: test-acc-tf-p-7133836999253446661
2026-05-23T01:05:24.4146323Z         
2026-05-23T01:05:24.4146757Z           with mongodbatlas_project.my_project,
2026-05-23T01:05:24.4147489Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-23T01:05:24.4148186Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-23T01:05:24.4148572Z         
2026-05-23T01:05:24.4149103Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:05:24.4149816Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:05:24.4150477Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:24.4150973Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (72.38s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 3 minutes
- 2026-05-26

### Error 2026-05-26T02:14:44+00:00
```
2026-05-26T02:14:44.2235952Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-05-26T02:14:44.2241861Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-05-26T02:14:44.2275646Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-05-26T02:14:44.2276137Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-26T02:14:44.2276511Z         
2026-05-26T02:14:44.2276932Z         Error: error creating project: test-acc-tf-p-4850447515979950157
2026-05-26T02:14:44.2277298Z         
2026-05-26T02:14:44.2277641Z           with mongodbatlas_project.my_project,
2026-05-26T02:14:44.2278265Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-26T02:14:44.2279026Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-26T02:14:44.2279357Z         
2026-05-26T02:14:44.2279813Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:14:44.2280435Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:14:44.2281001Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:44.2281432Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (69.36s)
```

- 2026-05-27 PASS 3 minutes
- 2026-05-28

### Error 2026-05-28T01:03:33+00:00
```
2026-05-28T01:03:33.2253529Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-05-28T01:03:33.2258839Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-05-28T01:03:33.2272851Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-05-28T01:03:33.2273301Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-28T01:03:33.2273642Z         
2026-05-28T01:03:33.2274008Z         Error: error creating project: test-acc-tf-p-6123600928942801667
2026-05-28T01:03:33.2274335Z         
2026-05-28T01:03:33.2274626Z           with mongodbatlas_project.my_project,
2026-05-28T01:03:33.2275296Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-28T01:03:33.2275821Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-28T01:03:33.2276107Z         
2026-05-28T01:03:33.2276514Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-05-28T01:03:33.2276878Z         type
2026-05-28T01:03:33.2277148Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (37.44s)
```

- 2026-05-29 PASS 2 minutes
- 2026-05-30 PASS 4 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 8 minutes
- 2026-06-02

### Error 2026-06-02T01:13:23+00:00
```
2026-06-02T01:13:23.3352056Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-06-02T01:13:23.3358827Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-06-02T01:13:23.3420030Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-06-02T01:13:23.3420834Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:13:23.3421589Z         
2026-06-02T01:13:23.3422265Z         Error: error creating project: test-acc-tf-p-8965810490891535519
2026-06-02T01:13:23.3434334Z         
2026-06-02T01:13:23.3434806Z           with mongodbatlas_project.my_project,
2026-06-02T01:13:23.3435603Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-06-02T01:13:23.3436329Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-06-02T01:13:23.3436718Z         
2026-06-02T01:13:23.3437281Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:13:23.3438012Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:13:23.3438685Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3439189Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (81.58s)
```

- 2026-06-03 PASS 4 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS 3 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 3 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
