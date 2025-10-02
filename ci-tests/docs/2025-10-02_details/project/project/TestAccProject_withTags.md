# project/project/TestAccProject_withTags Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, SKIP(x 33) FAIL(x 9)
Success rate: 0.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-03 00:28](#error-2025-09-03t0028450000) | VALIDATION_ERROR /api/atlas/v2/groups/68b78b4473bec4026cf7ff55 | dev |  | 9.03s
[2025-09-04 00:29](#error-2025-09-04t0029010000) | VALIDATION_ERROR /api/atlas/v2/groups/68b8dcc8ef2c35484d65e901 | dev |  | 9.06s
[2025-09-05 00:30](#error-2025-09-05t0030050000) | VALIDATION_ERROR /api/atlas/v2/groups/68ba2ea0881de515351bfb1f | dev |  | 10.03s
[2025-09-06 00:30](#error-2025-09-06t0030250000) | VALIDATION_ERROR /api/atlas/v2/groups/68bb7fc3debb2e1954e3c790 | dev |  | 11.03s
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd22bdf5af52d2d4d8bb0/limits | qa | flaky_500 | 34.07s
[2025-09-08 00:31](#error-2025-09-08t0031350000) | VALIDATION_ERROR /api/atlas/v2/groups/68be23564c1fe670da318847 | dev |  | 8.08s
[2025-09-08 09:56](#error-2025-09-08t0956230000) | VALIDATION_ERROR /api/atlas/v2/groups/68bea3360cddbf4f6e4a56fe | qa |  | 15.01s
[2025-09-08 12:07](#error-2025-09-08t1207260000) | VALIDATION_ERROR /api/atlas/v2/groups/68bec6746622a8021c55fc08 | dev |  | 9.08s
[2025-09-09 00:34](#error-2025-09-09t0034090000) | VALIDATION_ERROR /api/atlas/v2/groups/68bf74ac0353704e4f928c31 | dev |  | 14.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03

### Error 2025-09-03T00:28:45+00:00
```
2025-09-03T00:28:45.2737876Z === RUN   TestAccProject_withTags
2025-09-03T00:28:45.2743212Z === CONT  TestAccProject_withTags
2025-09-03T00:28:45.2772722Z === NAME  TestAccProject_withTags
2025-09-03T00:28:45.2773647Z     resource_project_test.go:1016: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-03T00:28:45.2774149Z         
2025-09-03T00:28:45.2774428Z         Error: error in project update
2025-09-03T00:28:45.2774687Z         
2025-09-03T00:28:45.2774978Z           with mongodbatlas_project.test,
2025-09-03T00:28:45.2775571Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-03T00:28:45.2776099Z           12: resource "mongodbatlas_project" "test" {
2025-09-03T00:28:45.2776396Z         
2025-09-03T00:28:45.2776829Z         error updating project (68b78b4473bec4026cf7ff55): error updating the
2025-09-03T00:28:45.2777283Z         project(68b78b4473bec4026cf7ff55):
2025-09-03T00:28:45.2777824Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b4473bec4026cf7ff55
2025-09-03T00:28:45.2778448Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-03T00:28:45.2779352Z         request content produced the validation error: The request parameters are not
2025-09-03T00:28:45.2780011Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-09-03T00:28:45.2780438Z         BadRequestDetail: 
2025-09-03T00:28:45.2781077Z --- FAIL: TestAccProject_withTags (9.32s)
```

- 2025-09-04

### Error 2025-09-04T00:29:01+00:00
```
2025-09-04T00:29:01.4837777Z === RUN   TestAccProject_withTags
2025-09-04T00:29:01.4846047Z === CONT  TestAccProject_withTags
2025-09-04T00:29:01.4875305Z === NAME  TestAccProject_withTags
2025-09-04T00:29:01.4876242Z     resource_project_test.go:1040: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-04T00:29:01.4876922Z         
2025-09-04T00:29:01.4877219Z         Error: error in project update
2025-09-04T00:29:01.4877493Z         
2025-09-04T00:29:01.4877786Z           with mongodbatlas_project.test,
2025-09-04T00:29:01.4878394Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-04T00:29:01.4878951Z           12: resource "mongodbatlas_project" "test" {
2025-09-04T00:29:01.4879242Z         
2025-09-04T00:29:01.4879671Z         error updating project (68b8dcc8ef2c35484d65e901): error updating the
2025-09-04T00:29:01.4880131Z         project(68b8dcc8ef2c35484d65e901):
2025-09-04T00:29:01.4880676Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b8dcc8ef2c35484d65e901
2025-09-04T00:29:01.4881304Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-04T00:29:01.4881943Z         request content produced the validation error: The request parameters are not
2025-09-04T00:29:01.4882593Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-09-04T00:29:01.4883020Z         BadRequestDetail: 
2025-09-04T00:29:01.4889141Z --- FAIL: TestAccProject_withTags (9.56s)
```

- 2025-09-05

### Error 2025-09-05T00:30:05+00:00
```
2025-09-05T00:30:05.0898655Z === RUN   TestAccProject_withTags
2025-09-05T00:30:05.0904009Z === CONT  TestAccProject_withTags
2025-09-05T00:30:05.0922804Z === NAME  TestAccProject_withTags
2025-09-05T00:30:05.0923682Z     resource_project_test.go:1034: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-05T00:30:05.0924180Z         
2025-09-05T00:30:05.0924460Z         Error: error in project update
2025-09-05T00:30:05.0924728Z         
2025-09-05T00:30:05.0925016Z           with mongodbatlas_project.test,
2025-09-05T00:30:05.0925738Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-05T00:30:05.0926265Z           12: resource "mongodbatlas_project" "test" {
2025-09-05T00:30:05.0926553Z         
2025-09-05T00:30:05.0926978Z         error updating project (68ba2ea0881de515351bfb1f): error updating the
2025-09-05T00:30:05.0927421Z         project(68ba2ea0881de515351bfb1f):
2025-09-05T00:30:05.0927955Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ba2ea0881de515351bfb1f
2025-09-05T00:30:05.0928574Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-05T00:30:05.0929202Z         request content produced the validation error: The request parameters are not
2025-09-05T00:30:05.0929841Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-09-05T00:30:05.0930265Z         BadRequestDetail: 
2025-09-05T00:30:05.0935622Z --- FAIL: TestAccProject_withTags (10.25s)
```

- 2025-09-06

### Error 2025-09-06T00:30:25+00:00
```
2025-09-06T00:30:25.7283436Z === RUN   TestAccProject_withTags
2025-09-06T00:30:25.7286810Z === CONT  TestAccProject_withTags
2025-09-06T00:30:25.7314554Z === NAME  TestAccProject_withTags
2025-09-06T00:30:25.7315238Z     resource_project_test.go:1040: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-06T00:30:25.7315738Z         
2025-09-06T00:30:25.7316050Z         Error: error in project update
2025-09-06T00:30:25.7316329Z         
2025-09-06T00:30:25.7316631Z           with mongodbatlas_project.test,
2025-09-06T00:30:25.7317220Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-06T00:30:25.7317749Z           12: resource "mongodbatlas_project" "test" {
2025-09-06T00:30:25.7318045Z         
2025-09-06T00:30:25.7318478Z         error updating project (68bb7fc3debb2e1954e3c790): error updating the
2025-09-06T00:30:25.7318936Z         project(68bb7fc3debb2e1954e3c790):
2025-09-06T00:30:25.7319485Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bb7fc3debb2e1954e3c790
2025-09-06T00:30:25.7320100Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-06T00:30:25.7320727Z         request content produced the validation error: The request parameters are not
2025-09-06T00:30:25.7321603Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-09-06T00:30:25.7322043Z         BadRequestDetail: 
2025-09-06T00:30:25.7322319Z --- FAIL: TestAccProject_withTags (11.26s)
```

- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4247860Z === RUN   TestAccProject_withTags
2025-09-07T00:39:14.4250958Z === CONT  TestAccProject_withTags
2025-09-07T00:39:14.4329602Z === NAME  TestAccProject_withTags
2025-09-07T00:39:14.4330105Z     resource_project_test.go:1040: Step 1/8 error: Error running apply: exit status 1
2025-09-07T00:39:14.4330480Z         
2025-09-07T00:39:14.4330851Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4331168Z         
2025-09-07T00:39:14.4331498Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4332183Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4332708Z           12: resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4332993Z         
2025-09-07T00:39:14.4333435Z         error getting project (68bcd22bdf5af52d2d4d8bb0): error getting project's
2025-09-07T00:39:14.4333888Z         limits (68bcd22bdf5af52d2d4d8bb0):
2025-09-07T00:39:14.4334453Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd22bdf5af52d2d4d8bb0/limits
2025-09-07T00:39:14.4335121Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4335684Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4336066Z         BadRequestDetail: 
2025-09-07T00:39:14.4336344Z --- FAIL: TestAccProject_withTags (34.72s)
```

- 2025-09-08
  - FAIL 8 seconds

### Error 2025-09-08T00:31:35+00:00
```
2025-09-08T00:31:35.9981584Z === RUN   TestAccProject_withTags
2025-09-08T00:31:35.9987601Z === CONT  TestAccProject_withTags
2025-09-08T00:31:36.0076934Z === NAME  TestAccProject_withTags
2025-09-08T00:31:36.0079019Z     resource_project_test.go:1040: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-08T00:31:36.0111177Z         
2025-09-08T00:31:36.0114557Z         Error: error in project update
2025-09-08T00:31:36.0117190Z         
2025-09-08T00:31:36.0118904Z           with mongodbatlas_project.test,
2025-09-08T00:31:36.0130735Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T00:31:36.0141514Z           12: resource "mongodbatlas_project" "test" {
2025-09-08T00:31:36.0152938Z         
2025-09-08T00:31:36.0158447Z         error updating project (68be23564c1fe670da318847): error updating the
2025-09-08T00:31:36.0160383Z         project(68be23564c1fe670da318847):
2025-09-08T00:31:36.0173936Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68be23564c1fe670da318847
2025-09-08T00:31:36.0175365Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-08T00:31:36.0176574Z         request content produced the validation error: The request parameters are not
2025-09-08T00:31:36.0177826Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-09-08T00:31:36.0178615Z         BadRequestDetail: 
2025-09-08T00:31:36.0179830Z --- FAIL: TestAccProject_withTags (8.78s)
```

  - FAIL 15 seconds

### Error 2025-09-08T09:56:23+00:00
```
2025-09-08T09:56:23.5763962Z === RUN   TestAccProject_withTags
2025-09-08T09:56:23.5766457Z === CONT  TestAccProject_withTags
2025-09-08T09:56:23.5791751Z === NAME  TestAccProject_withTags
2025-09-08T09:56:23.5792438Z     resource_project_test.go:1040: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-08T09:56:23.5792946Z         
2025-09-08T09:56:23.5793230Z         Error: error in project update
2025-09-08T09:56:23.5793515Z         
2025-09-08T09:56:23.5793811Z           with mongodbatlas_project.test,
2025-09-08T09:56:23.5794389Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:56:23.5794927Z           12: resource "mongodbatlas_project" "test" {
2025-09-08T09:56:23.5795216Z         
2025-09-08T09:56:23.5795749Z         error updating project (68bea3360cddbf4f6e4a56fe): error updating the
2025-09-08T09:56:23.5796205Z         project(68bea3360cddbf4f6e4a56fe):
2025-09-08T09:56:23.5796741Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea3360cddbf4f6e4a56fe
2025-09-08T09:56:23.5797346Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-08T09:56:23.5797971Z         request content produced the validation error: The request parameters are not
2025-09-08T09:56:23.5798608Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-09-08T09:56:23.5799042Z         BadRequestDetail: 
2025-09-08T09:56:23.5799799Z --- FAIL: TestAccProject_withTags (15.10s)
```

  - FAIL 9 seconds

### Error 2025-09-08T12:07:26+00:00
```
2025-09-08T12:07:26.8955098Z === RUN   TestAccProject_withTags
2025-09-08T12:07:26.8958137Z === CONT  TestAccProject_withTags
2025-09-08T12:07:26.8984417Z === NAME  TestAccProject_withTags
2025-09-08T12:07:26.8985116Z     resource_project_test.go:1040: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-08T12:07:26.8985630Z         
2025-09-08T12:07:26.8986019Z         Error: error in project update
2025-09-08T12:07:26.8986302Z         
2025-09-08T12:07:26.8986607Z           with mongodbatlas_project.test,
2025-09-08T12:07:26.8987202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T12:07:26.8987749Z           12: resource "mongodbatlas_project" "test" {
2025-09-08T12:07:26.8988040Z         
2025-09-08T12:07:26.8988477Z         error updating project (68bec6746622a8021c55fc08): error updating the
2025-09-08T12:07:26.8988930Z         project(68bec6746622a8021c55fc08):
2025-09-08T12:07:26.8989480Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bec6746622a8021c55fc08
2025-09-08T12:07:26.8990108Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-08T12:07:26.8990747Z         request content produced the validation error: The request parameters are not
2025-09-08T12:07:26.8991409Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-09-08T12:07:26.8991862Z         BadRequestDetail: 
2025-09-08T12:07:26.8992139Z --- FAIL: TestAccProject_withTags (9.84s)
```

- 2025-09-09

### Error 2025-09-09T00:34:09+00:00
```
2025-09-09T00:34:09.0654786Z === RUN   TestAccProject_withTags
2025-09-09T00:34:09.0660224Z === CONT  TestAccProject_withTags
2025-09-09T00:34:09.0683058Z === NAME  TestAccProject_withTags
2025-09-09T00:34:09.0683744Z     resource_project_test.go:1040: Step 2/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-09T00:34:09.0684248Z         
2025-09-09T00:34:09.0684525Z         Error: error in project update
2025-09-09T00:34:09.0684791Z         
2025-09-09T00:34:09.0685137Z           with mongodbatlas_project.test,
2025-09-09T00:34:09.0685731Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-09T00:34:09.0686546Z           12: resource "mongodbatlas_project" "test" {
2025-09-09T00:34:09.0686848Z         
2025-09-09T00:34:09.0687273Z         error updating project (68bf74ac0353704e4f928c31): error updating the
2025-09-09T00:34:09.0687733Z         project(68bf74ac0353704e4f928c31):
2025-09-09T00:34:09.0688273Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bf74ac0353704e4f928c31
2025-09-09T00:34:09.0688887Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-09T00:34:09.0689518Z         request content produced the validation error: The request parameters are not
2025-09-09T00:34:09.0690165Z         valid.. Reason: Bad Request. Params: [The request parameters are not valid.],
2025-09-09T00:34:09.0690590Z         BadRequestDetail: 
2025-09-09T00:34:09.0696901Z --- FAIL: TestAccProject_withTags (14.30s)
```

- 2025-09-10 SKIP unknown
- 2025-09-11 SKIP unknown
- 2025-09-12 SKIP unknown
- 2025-09-13 SKIP unknown
- 2025-09-14 SKIP unknown
- 2025-09-15
  - SKIP unknown
  - SKIP unknown
- 2025-09-16 SKIP unknown
- 2025-09-17 SKIP unknown
- 2025-09-18 SKIP unknown
- 2025-09-19 SKIP unknown
- 2025-09-20 SKIP unknown
- 2025-09-21 SKIP unknown
- 2025-09-22 SKIP unknown
- 2025-09-23 SKIP unknown
- 2025-09-24 SKIP unknown
- 2025-09-25 SKIP unknown
- 2025-09-26 SKIP unknown
- 2025-09-27 SKIP unknown
- 2025-09-28 SKIP unknown
- 2025-09-29 SKIP unknown
- 2025-09-30
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-01
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-02 SKIP unknown