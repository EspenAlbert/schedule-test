# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:34](#error-2025-06-29t0034190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089d049709c3a5a3ca202/limits | qa | flaky_500 | 33.07s
[2025-07-06 00:34](#error-2025-07-06t0034000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4547267b5775b683fb3/limits | qa | flaky_500 | 34.05s
[2025-07-10 13:09](#error-2025-07-10t1309210000) |  | qa | flaky_500 | 34.04s
[2025-07-13 00:34](#error-2025-07-13t0034200000) |  | qa | flaky_500 | 5.02s
[2025-07-23 08:17](#error-2025-07-23t0817160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a58dafa37582cecfa83/limits | qa | flaky_500 | 44.04s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 29 seconds
- 2025-06-26 PASS 31 seconds
- 2025-06-27 PASS 48 seconds
- 2025-06-28 PASS 23 seconds
- 2025-06-29

### Error 2025-06-29T00:34:19+00:00
```
2025-06-29T00:34:19.1728013Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-06-29T00:34:19.1735062Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-06-29T00:34:19.1866517Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-29T00:34:19.1867272Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-06-29T00:34:19.1868054Z         
2025-06-29T00:34:19.1868676Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1869164Z         
2025-06-29T00:34:19.1869859Z           with mongodbatlas_project.proj2,
2025-06-29T00:34:19.1870664Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-06-29T00:34:19.1871695Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-06-29T00:34:19.1872224Z         
2025-06-29T00:34:19.1872984Z         error getting project (686089d049709c3a5a3ca202): error getting project's
2025-06-29T00:34:19.1873658Z         limits (686089d049709c3a5a3ca202):
2025-06-29T00:34:19.1874433Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089d049709c3a5a3ca202/limits
2025-06-29T00:34:19.1883768Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1884436Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1884888Z         BadRequestDetail: 
2025-06-29T00:34:19.1885275Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (33.66s)
```

- 2025-06-30 PASS 33 seconds
- 2025-07-01
  - PASS 23 seconds
  - PASS 28 seconds
  - PASS 47 seconds
  - PASS 24 seconds
  - PASS 47 seconds
  - PASS 25 seconds
- 2025-07-02 PASS 23 seconds
- 2025-07-03 PASS 43 seconds
- 2025-07-04 PASS 28 seconds
- 2025-07-05 PASS 46 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.2823471Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.2830018Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.3030634Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.3031596Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-07-06T00:34:00.3032282Z         
2025-07-06T00:34:00.3032956Z         Error: error when getting project properties after create
2025-07-06T00:34:00.3033505Z         
2025-07-06T00:34:00.3034026Z           with mongodbatlas_project.proj2,
2025-07-06T00:34:00.3035079Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-07-06T00:34:00.3036236Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-07-06T00:34:00.3036736Z         
2025-07-06T00:34:00.3037508Z         error getting project (6869c4547267b5775b683fb3): error getting project's
2025-07-06T00:34:00.3038292Z         limits (6869c4547267b5775b683fb3):
2025-07-06T00:34:00.3039267Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4547267b5775b683fb3/limits
2025-07-06T00:34:00.3040405Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.3041398Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.3042069Z         BadRequestDetail: 
2025-07-06T00:34:00.3042617Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (34.49s)
```

- 2025-07-07 PASS 24 seconds
- 2025-07-08 PASS 48 seconds
- 2025-07-09 PASS 46 seconds
- 2025-07-10
  - PASS 27 seconds
  - FAIL 34 seconds

### Error 2025-07-10T13:09:21+00:00
```
2025-07-10T13:09:21.1982532Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-10T13:09:21.1995552Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-10T13:09:21.2143681Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-07-10T13:09:21.2144232Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-07-10T13:09:21.2144631Z         
2025-07-10T13:09:21.2145134Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2145542Z         
2025-07-10T13:09:21.2145856Z           with mongodbatlas_project_api_key.test,
2025-07-10T13:09:21.2146588Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-07-10T13:09:21.2147171Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-10T13:09:21.2147470Z         
2025-07-10T13:09:21.2166146Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-07-10T13:09:21.2166823Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:09:21.2167238Z         
2025-07-10T13:09:21.2167743Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2168145Z         
2025-07-10T13:09:21.2168414Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (34.43s)
```

- 2025-07-11 PASS 33 seconds
- 2025-07-12 PASS 24 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.8062345Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-13T00:34:20.8075456Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-13T00:34:20.8301446Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-07-13T00:34:20.8301997Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-07-13T00:34:20.8302397Z         
2025-07-13T00:34:20.8302909Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8303315Z         
2025-07-13T00:34:20.8303633Z           with mongodbatlas_project_api_key.test,
2025-07-13T00:34:20.8304259Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-07-13T00:34:20.8304845Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-13T00:34:20.8305143Z         
2025-07-13T00:34:20.8312272Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:34:20.8312712Z         
2025-07-13T00:34:20.8313214Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8313736Z         
2025-07-13T00:34:20.8314012Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (5.19s)
```

- 2025-07-14 PASS 47 seconds
- 2025-07-15 PASS 29 seconds
- 2025-07-16 PASS 33 seconds
- 2025-07-17 PASS 25 seconds
- 2025-07-18 PASS 25 seconds
- 2025-07-19 PASS 23 seconds
- 2025-07-20 PASS 20 seconds
- 2025-07-21 PASS 47 seconds
- 2025-07-22 PASS 30 seconds
- 2025-07-23
  - PASS 24 seconds
  - FAIL 44 seconds

### Error 2025-07-23T08:17:16+00:00
```
2025-07-23T08:17:16.8204721Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-23T08:17:16.8212168Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-23T08:17:16.8235788Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-07-23T08:17:16.8236539Z     resource_project_api_key_test.go:63: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T08:17:16.8236993Z         
2025-07-23T08:17:16.8237366Z         Error: error when getting project properties after create
2025-07-23T08:17:16.8237698Z         
2025-07-23T08:17:16.8237991Z           with mongodbatlas_project.proj2,
2025-07-23T08:17:16.8238585Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-07-23T08:17:16.8239124Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-07-23T08:17:16.8239421Z         
2025-07-23T08:17:16.8239857Z         error getting project (68809a58dafa37582cecfa83): error getting project's
2025-07-23T08:17:16.8240299Z         limits (68809a58dafa37582cecfa83):
2025-07-23T08:17:16.8240858Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a58dafa37582cecfa83/limits
2025-07-23T08:17:16.8241512Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T08:17:16.8242073Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T08:17:16.8242451Z         BadRequestDetail: 
2025-07-23T08:17:16.8242781Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (44.36s)
```

  - PASS 45 seconds
- 2025-07-24 PASS 32 seconds